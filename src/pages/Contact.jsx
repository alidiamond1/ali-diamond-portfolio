import React, { useState, useRef, useEffect } from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter
} from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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

  const colors = {
    primary: isDarkMode ? '#a78bfa' : '#7c3aed',
    secondary: isDarkMode ? '#818cf8' : '#6366f1',
    text: isDarkMode ? '#ffffff' : '#1e293b',
    textMuted: isDarkMode ? '#94a3b8' : '#64748b',
    bg: isDarkMode ? '#0f0a1f' : '#f8fafc',
    cardBg: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
    inputBg: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
    border: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
    accent: isDarkMode ? '#667eea' : '#4f46e5',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields'
      });
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name: formData.name,
      from_email: formData.email,
      time: new Date().toLocaleString(),
      message: formData.message,
      to_name: 'Ali Nor',
      to_email: 'calinuurcabdulle11@gmail.com'
    };

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )
      .then(() => {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Your message has been sent! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setFormStatus({
          submitted: false,
          error: true,
          message: `Error: ${error.text || 'Failed to send message'}. Please check your configuration.`
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'calinuurcabdulle11@gmail.com',
      href: 'mailto:calinuurcabdulle11@gmail.com'
    },
    {
      icon: FaPhoneAlt,
      label: 'Phone',
      value: '+252 619899733',
      href: 'tel:+252619899733'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Mogadishu, Somalia',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ali-diamond-19b8052b9/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/Alidiamond', label: 'GitHub' },
    { icon: FaWhatsapp, href: 'https://wa.me/252619899733', label: 'WhatsApp' },
    { icon: FaTwitter, href: 'https://x.com/Alidiamond143/', label: 'Twitter' }
  ];

  return (
    <section id="contact" style={{
      minHeight: '100vh',
      backgroundColor: colors.bg,
      padding: '8rem 2rem 4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'start'
      }}>
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: colors.text,
              lineHeight: 1.1,
              marginBottom: '1.5rem'
            }}>
              Let's Talk
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: colors.textMuted,
              lineHeight: 1.6,
              maxWidth: '450px'
            }}>
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ x: 10 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.border}`,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: isDarkMode ? 'none' : '0 4px 20px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.primary,
                  flexShrink: 0
                }}>
                  <item.icon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: colors.textMuted, marginBottom: '0.2rem' }}>{item.label}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '600', color: colors.text }}>{item.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '600', color: colors.text, marginBottom: '1.5rem' }}>Follow us</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.border}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: colors.text,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primary;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.cardBg;
                    e.currentTarget.style.color = colors.text;
                    e.currentTarget.style.borderColor = colors.border;
                  }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            backgroundColor: colors.cardBg,
            borderRadius: '24px',
            padding: '3rem',
            border: `1px solid ${colors.border}`,
            boxShadow: isDarkMode
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              : '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', color: colors.text, marginBottom: '0.5rem' }}>Send us a message</h2>
            <p style={{ color: colors.textMuted }}>Fill out the form below and we'll get back to you shortly.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  backgroundColor: colors.inputBg,
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                required
              />
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  backgroundColor: colors.inputBg,
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                required
              />
            </div>

            <div style={{ position: 'relative' }}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  backgroundColor: colors.inputBg,
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>

            <div style={{ position: 'relative' }}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  backgroundColor: colors.inputBg,
                  border: `1px solid ${colors.border}`,
                  color: colors.text,
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  resize: 'none'
                }}
                required
              />
            </div>

            {formStatus.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  backgroundColor: formStatus.error ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                  color: formStatus.error ? '#ef4444' : '#22c55e',
                  fontSize: '0.9rem',
                  textAlign: 'center',
                  fontWeight: '500'
                }}
              >
                {formStatus.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: '1.25rem',
                borderRadius: '12px',
                backgroundColor: isDarkMode ? '#ffffff' : '#1e293b',
                color: isDarkMode ? '#1e293b' : '#ffffff',
                fontWeight: '700',
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                marginTop: '1rem'
              }}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
