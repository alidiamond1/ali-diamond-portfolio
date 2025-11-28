import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { 
  FaTimes, 
  FaPaperPlane, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaEnvelope, 
  FaPhone,
  FaGlobe,
  FaExternalLinkAlt 
} from 'react-icons/fa';
import { RiRobot2Fill } from 'react-icons/ri';
import { useTheme } from '../contexts/ThemeContext';
import { portfolioContext } from '../data/portfolioContext';

const AIChatbot = () => {
  const { isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '👋 Soo dhawoow! / Welcome! I\'m Cali Nuur\'s AI assistant. I can answer questions about his skills, projects, experience, and more. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const ROTATING_MESSAGES = [
    {
      title: "We're Online!",
      text: "How may I help you today?"
    },
    {
      title: "Portfolio Assistant",
      text: "Ask me about Cali's projects! 🚀"
    },
    {
      title: "Curious?",
      text: "Learn about my skills & experience 💡"
    },
    {
      title: "Say Hello! 👋",
      text: "I'm here to answer your questions."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % ROTATING_MESSAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-open removed as per user request

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to get icon for link type
  const getLinkIcon = (url, label = '') => {
    const lowerUrl = url.toLowerCase();
    const lowerLabel = label.toLowerCase();
    
    if (lowerUrl.includes('github.com') || lowerLabel.includes('github')) {
      return <FaGithub style={{ fontSize: '16px' }} />;
    } else if (lowerUrl.includes('linkedin.com') || lowerLabel.includes('linkedin')) {
      return <FaLinkedin style={{ fontSize: '16px' }} />;
    } else if (lowerUrl.includes('twitter.com') || lowerLabel.includes('twitter')) {
      return <FaTwitter style={{ fontSize: '16px' }} />;
    } else if (lowerUrl.includes('facebook.com') || lowerLabel.includes('facebook')) {
      return <FaFacebook style={{ fontSize: '16px' }} />;
    } else if (lowerUrl.includes('mailto:') || lowerLabel.includes('email')) {
      return <FaEnvelope style={{ fontSize: '16px' }} />;
    } else if (lowerUrl.includes('tel:') || lowerLabel.includes('phone')) {
      return <FaPhone style={{ fontSize: '16px' }} />;
    } else if (lowerUrl.includes('netlify.app') || lowerUrl.includes('vercel.app') || lowerLabel.includes('portfolio')) {
      return <FaGlobe style={{ fontSize: '16px' }} />;
    }
    return <FaExternalLinkAlt style={{ fontSize: '14px' }} />;
  };

  // Function to format text with links, bold, lists, etc.
  const formatMessage = (text) => {
    const lines = text.split('\n');
    const elements = [];
    
    lines.forEach((line, lineIndex) => {
      if (!line.trim()) {
        elements.push(<br key={`br-${lineIndex}`} />);
        return;
      }

      // Check if line contains a labeled link (e.g., "GitHub: https://...")
      const labeledLinkMatch = line.match(/^([\w\s]+):\s*(https?:\/\/[^\s]+|[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+|\+?\d[\d\s-]+)$/);
      
      if (labeledLinkMatch) {
        const label = labeledLinkMatch[1].trim();
        const link = labeledLinkMatch[2].trim();
        const isEmail = link.includes('@');
        const isPhone = link.match(/^\+?\d/);
        const href = isEmail ? `mailto:${link}` : isPhone ? `tel:${link}` : link;
        
        elements.push(
          <div 
            key={`labeled-link-${lineIndex}`} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              marginBottom: '8px',
              padding: '8px',
              backgroundColor: isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)',
              borderRadius: '8px',
              border: `1px solid ${isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.15)'}`,
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(102, 126, 234, 0.15)' : 'rgba(102, 126, 234, 0.1)';
              e.currentTarget.style.transform = 'translateX(2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              backgroundColor: '#667eea',
              color: 'white',
              flexShrink: 0
            }}>
              {getLinkIcon(link, label)}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ 
                fontSize: '11px', 
                color: isDarkMode ? '#aaa6c3' : '#64748b',
                marginBottom: '2px',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {label}
              </div>
              <a
                href={href}
                target={isEmail || isPhone ? undefined : "_blank"}
                rel={isEmail || isPhone ? undefined : "noopener noreferrer"}
                style={{
                  color: '#667eea',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '13px',
                  wordBreak: 'break-all'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#764ba2';
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#667eea';
                  e.currentTarget.style.textDecoration = 'none';
                }}
              >
                {link}
              </a>
            </div>
          </div>
        );
        return;
      }

      // Process the line for inline formatting
      const processInlineFormatting = (text) => {
        const parts = [];
        let currentIndex = 0;
        
        // Combined regex for URLs, emails, and bold text
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
        const boldRegex = /\*\*([^*]+)\*\*/g;
        
        // Find all matches
        const matches = [];
        
        // Find URLs
        let match;
        const urlMatches = [...text.matchAll(urlRegex)];
        urlMatches.forEach(m => {
          matches.push({ type: 'url', start: m.index, end: m.index + m[0].length, text: m[0] });
        });
        
        // Find emails
        const emailMatches = [...text.matchAll(emailRegex)];
        emailMatches.forEach(m => {
          matches.push({ type: 'email', start: m.index, end: m.index + m[0].length, text: m[0] });
        });
        
        // Find bold text
        const boldMatches = [...text.matchAll(boldRegex)];
        boldMatches.forEach(m => {
          matches.push({ type: 'bold', start: m.index, end: m.index + m[0].length, text: m[1] });
        });
        
        // Sort matches by start position
        matches.sort((a, b) => a.start - b.start);
        
        // Build the formatted text
        matches.forEach((match, idx) => {
          // Add text before this match
          if (match.start > currentIndex) {
            parts.push(text.substring(currentIndex, match.start));
          }
          
          // Add the formatted match
          if (match.type === 'url') {
            parts.push(
              <a
                key={`url-${idx}`}
                href={match.text}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#667eea',
                  textDecoration: 'none',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#764ba2';
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#667eea';
                  e.currentTarget.style.textDecoration = 'none';
                }}
              >
                {getLinkIcon(match.text)}
                <span>{match.text}</span>
              </a>
            );
          } else if (match.type === 'email') {
            parts.push(
              <a
                key={`email-${idx}`}
                href={`mailto:${match.text}`}
                style={{
                  color: '#667eea',
                  textDecoration: 'none',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#764ba2';
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#667eea';
                  e.currentTarget.style.textDecoration = 'none';
                }}
              >
                <FaEnvelope style={{ fontSize: '14px' }} />
                <span>{match.text}</span>
              </a>
            );
          } else if (match.type === 'bold') {
            parts.push(<strong key={`bold-${idx}`}>{match.text}</strong>);
          }
          
          currentIndex = match.end;
        });
        
        // Add remaining text
        if (currentIndex < text.length) {
          parts.push(text.substring(currentIndex));
        }
        
        return parts.length > 0 ? parts : text;
      };

      // Check if line is a bullet point
      if (line.trim().match(/^[-*•]\s+/)) {
        const content = line.trim().replace(/^[-*•]\s+/, '');
        elements.push(
          <div key={`bullet-${lineIndex}`} style={{ display: 'flex', marginBottom: '4px', paddingLeft: '8px' }}>
            <span style={{ marginRight: '8px', color: '#667eea' }}>•</span>
            <span>{processInlineFormatting(content)}</span>
          </div>
        );
      }
      // Check if line is a numbered list
      else if (line.trim().match(/^\d+\.\s+/)) {
        const content = line.trim().replace(/^\d+\.\s+/, '');
        const number = line.trim().match(/^(\d+)\./)[1];
        elements.push(
          <div key={`number-${lineIndex}`} style={{ display: 'flex', marginBottom: '4px', paddingLeft: '8px' }}>
            <span style={{ marginRight: '8px', color: '#667eea', fontWeight: '500' }}>{number}.</span>
            <span>{processInlineFormatting(content)}</span>
          </div>
        );
      }
      // Regular text
      else {
        elements.push(
          <div key={`line-${lineIndex}`} style={{ marginBottom: '4px' }}>
            {processInlineFormatting(line)}
          </div>
        );
      }
    });
    
    return <div>{elements}</div>;
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Initialize Gemini AI
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

      // Create chat with context
      const chat = model.startChat({
        history: [
          {
            role: 'user',
            parts: [{ text: portfolioContext }]
          },
          {
            role: 'model',
            parts: [{ text: 'I understand. I will act as an AI assistant for Cali Nuur Cabdulle\'s portfolio and provide helpful, accurate responses based on the information provided.' }]
          },
          ...messages.slice(1).map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
          }))
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      });

      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const text = response.text();

      // Add AI response to chat
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please make sure the Gemini API key is configured correctly. You can contact Cali Nuur directly at calinuurcabdulle11@gmail.com or +252 619899733.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
      fontFamily: 'inherit'
    }}>
      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: '0',
          width: '380px',
          maxWidth: '90vw',
          height: '550px',
          maxHeight: '80vh',
          backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff',
          borderRadius: '16px',
          boxShadow: isDarkMode 
            ? '0 10px 40px rgba(0, 0, 0, 0.6)' 
            : '0 10px 40px rgba(0, 0, 0, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
          animation: 'slideUp 0.3s ease-out'
        }}>
          {/* Header */}
          <div style={{
            padding: '16px 20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '16px 16px 0 0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px'
              }}>
                <RiRobot2Fill />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>AI Assistant</h3>
                <p style={{ margin: 0, fontSize: '12px', opacity: 0.9 }}>Ask me about Cali Nuur</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                fontSize: '20px',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages Container */}
          <div
            ref={chatContainerRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: isDarkMode ? '#0f0f1e' : '#f7f7f7'
            }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                  animation: 'fadeIn 0.3s ease-in'
                }}
              >
                <div style={{
                  maxWidth: '80%',
                  padding: '12px 16px',
                  borderRadius: message.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  backgroundColor: message.role === 'user' 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : isDarkMode ? '#1a1a2e' : '#ffffff',
                  color: message.role === 'user' ? 'white' : isDarkMode ? '#e0e0e0' : '#2d3748',
                  background: message.role === 'user' 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : isDarkMode ? '#1a1a2e' : '#ffffff',
                  boxShadow: isDarkMode 
                    ? '0 2px 8px rgba(0, 0, 0, 0.3)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.08)',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  wordWrap: 'break-word'
                }}>
                  {message.role === 'user' ? message.content : formatMessage(message.content)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                animation: 'fadeIn 0.3s ease-in'
              }}>
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '16px 16px 16px 4px',
                  backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff',
                  boxShadow: isDarkMode 
                    ? '0 2px 8px rgba(0, 0, 0, 0.3)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  gap: '4px'
                }}>
                  <span className="typing-dot" style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#667eea',
                    animation: 'bounce 1.4s infinite ease-in-out',
                    animationDelay: '0s'
                  }}></span>
                  <span className="typing-dot" style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#667eea',
                    animation: 'bounce 1.4s infinite ease-in-out',
                    animationDelay: '0.2s'
                  }}></span>
                  <span className="typing-dot" style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#667eea',
                    animation: 'bounce 1.4s infinite ease-in-out',
                    animationDelay: '0.4s'
                  }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={sendMessage} style={{
            padding: '16px',
            borderTop: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            backgroundColor: isDarkMode ? '#1a1a2e' : '#ffffff',
            display: 'flex',
            gap: '8px'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '24px',
                border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.2)',
                backgroundColor: isDarkMode ? '#0f0f1e' : '#f7f7f7',
                color: isDarkMode ? '#e0e0e0' : '#2d3748',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'}
              onBlur={(e) => e.currentTarget.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              style={{
                padding: '12px 16px',
                borderRadius: '24px',
                border: 'none',
                background: input.trim() && !isLoading 
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : isDarkMode ? '#2d2d44' : '#d1d5db',
                color: 'white',
                cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s, opacity 0.2s',
                opacity: input.trim() && !isLoading ? 1 : 0.5
              }}
              onMouseOver={(e) => {
                if (input.trim() && !isLoading) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }
              }}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}

      {/* Rotating Message Bubble */}
      {!isOpen && isBubbleVisible && (
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '80px',
          backgroundColor: isDarkMode ? '#1a1a2e' : 'white',
          padding: '15px 20px',
          borderRadius: '12px',
          boxShadow: isDarkMode ? '0 4px 15px rgba(0,0,0,0.5)' : '0 4px 15px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          width: 'max-content',
          maxWidth: '220px',
          animation: 'fadeIn 0.5s ease-in-out',
          border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(102, 126, 234, 0.1)',
          zIndex: 1001,
          cursor: 'pointer'
        }}
        onClick={toggleChat}
        >
          {/* Close Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsBubbleVisible(false);
            }}
            style={{
              position: 'absolute',
              top: '-10px',
              left: '-10px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              zIndex: 1002,
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <FaTimes />
          </button>

          {/* Message Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <span style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#667eea',
              display: 'block'
            }}>
              {ROTATING_MESSAGES[currentMessageIndex].title}
            </span>
            <span style={{
              fontSize: '13px',
              color: isDarkMode ? '#ccc' : '#4b5563',
              lineHeight: '1.4'
            }}>
              {ROTATING_MESSAGES[currentMessageIndex].text}
            </span>
          </div>

          {/* Arrow */}
          <div style={{
            position: 'absolute',
            right: '-8px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '0',
            height: '0',
            borderTop: '8px solid transparent',
            borderBottom: '8px solid transparent',
            borderLeft: `8px solid ${isDarkMode ? '#1a1a2e' : 'white'}`
          }} />
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
          border: '4px solid rgba(255, 255, 255, 0.2)',
          color: 'white',
          fontSize: '28px',
          cursor: 'pointer',
          boxShadow: isDarkMode 
            ? '0 8px 24px rgba(79, 70, 229, 0.5)' 
            : '0 8px 24px rgba(124, 58, 237, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          backdropFilter: 'blur(4px)',
          zIndex: 1000
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
          e.currentTarget.style.boxShadow = isDarkMode 
            ? '0 12px 30px rgba(79, 70, 229, 0.7)' 
            : '0 12px 30px rgba(124, 58, 237, 0.5)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
          e.currentTarget.style.boxShadow = isDarkMode 
            ? '0 8px 24px rgba(79, 70, 229, 0.5)' 
            : '0 8px 24px rgba(124, 58, 237, 0.3)';
        }}
      >
        {isOpen ? <FaTimes style={{ fontSize: '24px' }} /> : <RiRobot2Fill />}
      </button>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
          }
          50% {
            box-shadow: 0 4px 20px rgba(102, 126, 234, 0.8);
          }
        }

        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
};

export default AIChatbot;

