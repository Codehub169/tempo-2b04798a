import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesWrapper = styled.section`
  padding: 6rem 2rem;
  background-color: ${props => props.theme.colors.background};
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 4rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${props => props.theme.colors.textSlightlyMuted};
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr; // Stack on mobile
    gap: 2rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.white};
  padding: 2.5rem 2rem;
  border-radius: ${props => props.theme.borderRadius};
  /* A very subtle shadow for a gentle lift, can be adjusted or removed */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(74, 74, 104, 0.1); // Using primary color with low opacity
  }
`;

const IconPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.accent}20; // Accent color with low opacity
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.accent};
  // In a real implementation, an SVG icon would go here.
  // For now, we use a simple text placeholder for the icon concept.
`;

const ServiceName = styled.h3`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.75rem;
`;

const ServiceDescription = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 0.95rem;
  color: ${props => props.theme.colors.text};
  line-height: 1.7;
  font-style: italic; // For the poetic/playful microcopy
`;

const servicesData = [
  { name: 'Branding', description: 'Identities that resonate and remain.', icon: 'B' },
  { name: 'Packaging', description: 'Packaging, but make it poetic.', icon: 'P' },
  { name: 'Social Media', description: 'Digital narratives, beautifully told.', icon: 'S' },
  { name: 'Stationery', description: 'Tactile stories, elegantly crafted.', icon: 'T' },
  { name: 'Coffee Table Books', description: 'Legacy pieces, designed to inspire.', icon: 'C' },
  { name: 'Creative Projects', description: 'Your unique vision, brought to life.', icon: 'CP' },
];

// Animation variants for Framer Motion
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const ServicesSection = () => {
  return (
    <ServicesWrapper id="services">
      <SectionTitle>What We Do</SectionTitle>
      <SectionSubtitle>
        From foundational branding to bespoke creative ventures, we craft visual narratives that speak with quiet confidence and lasting impact.
      </SectionSubtitle>
      <ServicesGrid 
        as={motion.div} 
        variants={sectionVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={index} variants={cardVariants}>
            <IconPlaceholder>{service.icon}</IconPlaceholder> {/* Replace with actual icons */}
            <ServiceName>{service.name}</ServiceName>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesWrapper>
  );
};

export default ServicesSection;
