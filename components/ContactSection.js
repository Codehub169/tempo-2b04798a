import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ContactSectionWrapper,
  SectionTitle,
  SectionSubtitle,
  FormStyled,
  FormGroup,
  LabelStyled,
  InputStyled,
  TextareaStyled,
  ButtonStyled,
  SocialLinkWrapper,
  SocialLink,
  FormStatusMessage
} from './ContactSection.styled';

// Example: Framer Motion variants for animations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'circOut' } },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: result.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', services: '', budget: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.error || 'An error occurred. Please try again.' });
      }
    } catch (error) {
      console.error('Contact form submission error:', error); // Added console.error for better debugging
      setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
    }
    setIsSubmitting(false);
  };

  return (
    <ContactSectionWrapper
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionTitle variants={itemVariants}>Let's Create Together</SectionTitle>
      <SectionSubtitle variants={itemVariants}>
        Have a project in mind or just want to say hello? We'd love to hear from you.
      </SectionSubtitle>

      <FormStyled onSubmit={handleSubmit} variants={itemVariants}>
        <FormGroup>
          <LabelStyled htmlFor="name">Full Name</LabelStyled>
          <InputStyled
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Jane Doe"
            required
            aria-required="true"
          />
        </FormGroup>

        <FormGroup>
          <LabelStyled htmlFor="email">Email Address</LabelStyled>
          <InputStyled
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g., jane.doe@example.com"
            required
            aria-required="true"
          />
        </FormGroup>

        <FormGroup>
          <LabelStyled htmlFor="services">Services Interested In (Optional)</LabelStyled>
          <InputStyled
            type="text"
            name="services"
            id="services"
            value={formData.services}
            onChange={handleChange}
            placeholder="e.g., Branding, Packaging"
          />
        </FormGroup>

        <FormGroup>
          <LabelStyled htmlFor="budget">Project Budget (Optional)</LabelStyled>
          <InputStyled
            type="text"
            name="budget"
            id="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="e.g., $1000 - $5000, Not Sure Yet"
          />
        </FormGroup>

        <FormGroup>
          <LabelStyled htmlFor="message">Your Message</LabelStyled>
          <TextareaStyled
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project or inquiry..."
            rows={5}
            required
            aria-required="true"
          />
        </FormGroup>

        <ButtonStyled
          type="submit"
          disabled={isSubmitting}
          variants={itemVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </ButtonStyled>
        
        {status.message && (
          <FormStatusMessage 
            className={status.type}
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            aria-live="polite" // Added for accessibility
          >
            {status.message}
          </FormStatusMessage>
        )}
      </FormStyled>

      <SocialLinkWrapper variants={itemVariants}>
        <SectionSubtitle style={{ fontSize: '1rem', marginBottom: '1rem' }}>Or connect with us on:</SectionSubtitle>
        {/* Replace # with actual links and add actual icons */}
        <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Connect on GitHub (Example)">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" aria-hidden="true"> <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /> </svg>
          GitHub (Example)
        </SocialLink>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Connect on Dribbble (Example)">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" aria-hidden="true"> <path d="M22.258 7.646a.75.75 0 00-.702-.57h-2.01c-.264-2.48-2.137-4.41-4.548-4.726V2a.75.75 0 00-1.5 0v.355c-2.41.315-4.284 2.246-4.548 4.726h-2.01a.75.75 0 00-.702.57c-.04.337.142.663.438.793l1.98 1.32c-1.022 2.325-1.022 5.016 0 7.34l-1.98 1.32a.75.75 0 00-.438.793c.04.337.338.57.702.57h2.01c.264 2.48 2.137 4.41 4.548 4.726V22a.75.75 0 001.5 0v-.355c2.41-.315 4.284-2.246 4.548-4.726h2.01a.75.75 0 00.702-.57.75.75 0 00-.438-.793l-1.98-1.32c1.022-2.325 1.022-5.016 0-7.34l1.98-1.32a.75.75 0 00.438-.793zM12 16.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" /> </svg>
          Dribbble (Example)
        </SocialLink>
      </SocialLinkWrapper>

    </ContactSectionWrapper>
  );
};

export default ContactSection;
