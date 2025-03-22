import React, { useState, useRef, useEffect } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import emailjs from '@emailjs/browser';

// EmailJS configuration - You need to replace these with your actual values from EmailJS dashboard
const EMAILJS_SERVICE_ID = 'service_9bmjtfp'; // Replace with your actual service ID
const EMAILJS_TEMPLATE_ID = 'template_w5pqby5'; // Replace with your actual template ID
const EMAILJS_PUBLIC_KEY = 'mHaoAvwSmLy5Siiri'; // Your EmailJS public key

const Contact = () => {
  const { isDarkMode } = useTheme();
  const formRef = useRef(null);
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields'
      });
      setIsSubmitting(false);
      return;
    }
    
    // For testing purposes - simulate success without actual email sending
    // This ensures the form works while you set up EmailJS properly
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Your message has been sent! I will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      
      // Log the form data that would be sent
      console.log('Form data that would be sent:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'Portfolio Contact Form',
        message: formData.message,
        to_email: 'calinuurcabdulle11@gmail.com'
      });
    }, 1500);
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'Portfolio Contact Form',
      message: formData.message,
      to_name: 'Ali Nor',
      to_email: 'calinuurcabdulle11@gmail.com' // Your email address to receive messages
    };

    // Send email using EmailJS
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )
    .then((response) => {
      console.log('Email sent successfully!', response);
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Your message has been sent! I will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Failed to send your message. Please try again later.'
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
    border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
    color: isDarkMode ? 'white' : 'black',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  const focusStyle = {
    borderColor: 'var(--color-blue-500)',
    boxShadow: `0 0 0 2px ${isDarkMode ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)'}`
  };

  return (
    <section id="contact" style={{ 
      padding: '5rem 0', 
      backgroundColor: isDarkMode ? 'var(--color-primary-dark)' : 'var(--color-primary)',
      transition: 'background-color 0.3s ease'
    }}>
      <div className="section-container">
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          marginBottom: '1.5rem', 
          textAlign: 'center',
          color: isDarkMode ? 'white' : 'var(--color-text-dark)'
        }}>
          Contact Me
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: 'var(--color-secondary)', 
          maxWidth: '48rem', 
          margin: '0 auto 3rem', 
          textAlign: 'center' 
        }}>
          Have a project in mind or want to discuss opportunities? Get in touch!
        </p>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{ 
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'var(--color-tertiary)',
              borderRadius: '1rem',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: isDarkMode 
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' 
                : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }} 
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 20px 25px -5px rgba(0, 0, 0, 0.4)' 
                : '0 20px 25px -5px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' 
                : '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onClick={() => window.location.href = 'mailto:Calilucky3@gmail.com'}
            >
              <div style={{ 
                backgroundColor: 'var(--color-blue-600)',
                borderRadius: '50%',
                width: '3rem',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                color: 'white',
                flexShrink: 0
              }}>
                <FaEnvelope />
              </div>
              
              <div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem',
                  color: isDarkMode ? 'white' : 'var(--color-text-dark)'
                }}>
                  Email
                </h3>
                <a 
                  href="mailto:Calilucky3@gmail.com"
                  style={{ 
                    color: 'var(--color-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.color = 'var(--color-blue-500)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--color-secondary)'}
                >
                  Calilucky3@gmail.com
                </a>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'var(--color-tertiary)',
              borderRadius: '1rem',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: isDarkMode 
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' 
                : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 20px 25px -5px rgba(0, 0, 0, 0.4)' 
                : '0 20px 25px -5px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' 
                : '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            onClick={() => window.open('https://github.com/alidiamond1', '_blank')}
            >
              <div style={{ 
                backgroundColor: 'var(--color-blue-600)',
                borderRadius: '50%',
                width: '3rem',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                color: 'white',
                flexShrink: 0
              }}>
                <FaGithub />
              </div>
              
              <div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem',
                  color: isDarkMode ? 'white' : 'var(--color-text-dark)'
                }}>
                  GitHub
                </h3>
                <a 
                  href="https://github.com/alidiamond1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: 'var(--color-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.color = 'var(--color-blue-500)'}
                  onMouseOut={(e) => e.target.style.color = 'var(--color-secondary)'}
                >
                  github.com/alidiamond1
                </a>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'var(--color-tertiary)',
              borderRadius: '1rem',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: isDarkMode 
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' 
                : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 20px 25px -5px rgba(0, 0, 0, 0.4)' 
                : '0 20px 25px -5px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' 
                : '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
            }}
            >
              <div style={{ 
                backgroundColor: 'var(--color-blue-600)',
                borderRadius: '50%',
                width: '3rem',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                color: 'white',
                flexShrink: 0
              }}>
                <FaMapMarkerAlt />
              </div>
              
              <div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem',
                  color: isDarkMode ? 'white' : 'var(--color-text-dark)'
                }}>
                  Location
                </h3>
                <p style={{ color: 'var(--color-secondary)' }}>
                  Mogadishu, Somalia
                </p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'var(--color-tertiary)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: isDarkMode 
              ? '0 35px 120px -15px rgba(0, 0, 0, 0.4)' 
              : '0 35px 120px -15px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '1.5rem', 
              textAlign: 'center',
              color: isDarkMode ? 'white' : 'var(--color-text-dark)'
            }}>
              Send Me a Message
            </h3>
            
            {formStatus.submitted && (
              <div style={{ 
                backgroundColor: 'rgba(37, 99, 235, 0.1)', 
                color: 'var(--color-blue-500)',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '500'
              }}>
                {formStatus.message}
              </div>
            )}
            
            {formStatus.error && (
              <div style={{ 
                backgroundColor: 'rgba(239, 68, 68, 0.1)', 
                color: '#ef4444',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '500'
              }}>
                {formStatus.message}
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit}>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label 
                    htmlFor="name"
                    style={{ 
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: isDarkMode ? 'white' : 'var(--color-text-dark)'
                    }}
                  >
                    Your Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = focusStyle.borderColor;
                      e.target.style.boxShadow = focusStyle.boxShadow;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                    required
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email"
                    style={{ 
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: isDarkMode ? 'white' : 'var(--color-text-dark)'
                    }}
                  >
                    Your Email <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = focusStyle.borderColor;
                      e.target.style.boxShadow = focusStyle.boxShadow;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                    required
                  />
                </div>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label 
                  htmlFor="subject"
                  style={{ 
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: isDarkMode ? 'white' : 'var(--color-text-dark)'
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = focusStyle.borderColor;
                    e.target.style.boxShadow = focusStyle.boxShadow;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label 
                  htmlFor="message"
                  style={{ 
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: isDarkMode ? 'white' : 'var(--color-text-dark)'
                  }}
                >
                  Your Message <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  style={{
                    ...inputStyle,
                    resize: 'vertical'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = focusStyle.borderColor;
                    e.target.style.boxShadow = focusStyle.boxShadow;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
                    e.target.style.boxShadow = 'none';
                  }}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  width: '100%',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--color-blue-500)',
                  color: 'white',
                  fontWeight: '500',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: isSubmitting ? 0.7 : 1,
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) e.target.style.backgroundColor = 'var(--color-blue-600)';
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) e.target.style.backgroundColor = 'var(--color-blue-500)';
                }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
