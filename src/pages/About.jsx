import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import profileImage from '../assets/images/CALI NUUR.jpg';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaWhatsapp, 
  FaTelegram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaRobot,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaBrain
} from 'react-icons/fa';
import { HiSparkles, HiArrowRight } from 'react-icons/hi2';
import LampBackground from '../components/LampBackground';

const About = () => {
  const { isDarkMode } = useTheme();

  const colors = {
    primary: isDarkMode ? '#a78bfa' : '#7c3aed',
    secondary: isDarkMode ? '#818cf8' : '#6366f1',
    text: isDarkMode ? '#ffffff' : '#1e293b',
    textMuted: isDarkMode ? '#94a3b8' : '#64748b',
    bg: isDarkMode ? '#0f0a1f' : '#f8fafc',
    cardBg: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
    border: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    gradient: isDarkMode 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
  };

  const expertise = [
    { icon: FaCode, title: 'Full-Stack Development', desc: 'React, Node.js, Next.js, PHP' },
    { icon: FaRobot, title: 'AI/ML Engineering', desc: 'TensorFlow, PyTorch, Scikit-learn' },
    { icon: FaMobile, title: 'Mobile Development', desc: 'Flutter, React Native' },
    { icon: FaDatabase, title: 'Database Design', desc: 'MongoDB, PostgreSQL, MySQL' },
    { icon: FaCloud, title: 'Cloud & DevOps', desc: 'AWS, Docker, CI/CD' },
    { icon: FaBrain, title: 'Computer Vision & NLP', desc: 'OpenCV, BERT, GPT Integration' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Alidiamond', label: 'GitHub', username: '@Alidiamond' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ali-diamond-19b8052b9/', label: 'LinkedIn', username: '@ali-diamond' },
    { icon: FaTwitter, href: 'https://x.com/Alidiamond143/', label: 'Twitter', username: '@Alidiamond143' },
    { icon: FaWhatsapp, href: 'https://wa.me/252619899733', label: 'WhatsApp', username: '+252 619899733' },
    { icon: FaTelegram, href: 'https://t.me/Alidiamond10', label: 'Telegram', username: '@Alidiamond10' },
  ];

  const stats = [
    { value: '60+', label: 'Projects Completed' },
    { value: '4+', label: 'Years Experience' },
    { value: '20+', label: 'Technologies' },
    { value: '15+', label: 'Happy Clients' },
  ];

  return (
    <section style={{ 
      background: colors.bg,
      minHeight: '100vh',
      paddingBottom: '4rem',
    }}>
      {/* Lamp Header */}
      <LampBackground>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ textAlign: 'center', marginTop: '2rem' }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              background: colors.cardBg,
              border: `1px solid ${colors.border}`,
              color: colors.primary,
              fontSize: '0.875rem',
              fontWeight: '500',
              marginBottom: '1rem',
            }}
          >
            <HiSparkles size={16} />
            Get to know me
          </motion.span>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            background: isDarkMode 
              ? 'linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)'
              : 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            About Me
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: colors.textMuted,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Passionate developer crafting intelligent solutions
          </p>
        </motion.div>
      </LampBackground>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
      }}>
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '4rem',
          }}
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div style={{
              position: 'relative',
              width: '280px',
              height: '280px',
            }}>
              {/* Glow Effect */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                borderRadius: '50%',
                background: colors.gradient,
                opacity: 0.2,
                filter: 'blur(40px)',
              }} />
              
              {/* Animated Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '50%',
                  border: `2px dashed ${colors.primary}`,
                  opacity: 0.4,
                }}
              />
              
              {/* Image */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                border: `4px solid ${colors.primary}`,
                boxShadow: `0 20px 60px ${isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(99, 102, 241, 0.25)'}`,
              }}>
                <img
                  src={profileImage}
                  alt="Ali Nor Abdulle"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: colors.text,
              marginBottom: '0.5rem',
            }}>
              Ali Nor Abdulle
            </h2>
            
            <p style={{
              fontSize: '1.125rem',
              color: colors.primary,
              fontWeight: '600',
              marginBottom: '1.5rem',
            }}>
              Full-Stack Developer & AI/ML Engineer
            </p>

            {/* Contact Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}>
              {[
                { icon: FaMapMarkerAlt, text: 'Mogadishu, Somalia' },
                { icon: FaEnvelope, text: 'calinuurcabdulle11@gmail.com' },
                { icon: FaPhone, text: '+252 619899733' },
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: colors.textMuted,
                }}>
                  <item.icon size={16} style={{ color: colors.primary }} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
            }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    background: colors.cardBg,
                    border: `1px solid ${colors.border}`,
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: colors.primary,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: colors.textMuted,
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '2rem',
            borderRadius: '20px',
            background: colors.cardBg,
            border: `1px solid ${colors.border}`,
            marginBottom: '3rem',
            backdropFilter: 'blur(10px)',
          }}
        >
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: colors.text,
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
            <span style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: colors.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <HiSparkles size={20} color="white" />
            </span>
            Professional Summary
          </h3>
          
          <p style={{
            fontSize: '1.05rem',
            color: colors.textMuted,
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}>
            Dynamic <strong style={{ color: colors.primary }}>AI/ML Engineer</strong> and{' '}
            <strong style={{ color: colors.primary }}>Full-Stack Developer</strong> with proven expertise 
            at Daluul Tech, specializing in intelligent web and mobile application development. I leverage 
            cutting-edge technologies including TensorFlow, PyTorch, and Scikit-learn alongside React.js, 
            Node.js, PHP, and Flutter to build AI-powered, responsive applications.
          </p>
          
          <p style={{
            fontSize: '1.05rem',
            color: colors.textMuted,
            lineHeight: 1.8,
          }}>
            My expertise spans <strong style={{ color: colors.text }}>Machine Learning</strong>,{' '}
            <strong style={{ color: colors.text }}>Deep Learning</strong>,{' '}
            <strong style={{ color: colors.text }}>Computer Vision</strong>, and{' '}
            <strong style={{ color: colors.text }}>NLP</strong>, deploying production-ready AI models 
            to create intelligent, data-driven solutions that solve real-world problems. Currently 
            specializing in transformer models, reinforcement learning, and MLOps for production deployment.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: colors.text,
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}>
            Areas of Expertise
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
          }}>
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  background: colors.cardBg,
                  border: `1px solid ${colors.border}`,
                  textAlign: 'center',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: colors.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}>
                  <item.icon size={24} color="white" />
                </div>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: colors.text,
                  marginBottom: '0.5rem',
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: '0.8rem',
                  color: colors.textMuted,
                }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          {[
            { to: '/education', icon: FaGraduationCap, label: 'Education History' },
            { to: '/experience', icon: FaBriefcase, label: 'Work Experience' },
          ].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={link.to}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  borderRadius: '14px',
                  background: colors.gradient,
                  color: 'white',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: `0 10px 30px ${isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(99, 102, 241, 0.25)'}`,
                }}
              >
                <link.icon size={18} />
                {link.label}
                <HiArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{
            padding: '2rem',
            borderRadius: '20px',
            background: colors.cardBg,
            border: `1px solid ${colors.border}`,
            textAlign: 'center',
          }}
        >
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: colors.text,
            marginBottom: '1.5rem',
          }}>
            Let's Connect
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
          }}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '16px',
                  background: isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                  border: `1px solid ${colors.border}`,
                  textDecoration: 'none',
                  minWidth: '120px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.gradient;
                  e.currentTarget.style.borderColor = 'transparent';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)';
                  e.currentTarget.style.borderColor = colors.border;
                }}
              >
                <social.icon size={28} style={{ color: colors.text }} />
                <span style={{ fontWeight: '600', color: colors.text, fontSize: '0.9rem' }}>
                  {social.label}
                </span>
                <span style={{ fontSize: '0.75rem', color: colors.textMuted }}>
                  {social.username}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
