import React from 'react';
import { motion } from 'framer-motion';
import {
  ServicesWrapper,
  SectionTitle,
  SectionSubtitle,
  ServicesGrid,
  ServiceCardStyled as ServiceCard, 
  ServiceIconPlaceholder as IconPlaceholder,
  ServiceName,
  ServiceDescription
} from './ServicesSection.styled';

const servicesData = [
  { id: 'branding', name: 'Branding', description: 'Identities that resonate and remain.', icon: 'B' },
  { id: 'packaging', name: 'Packaging', description: 'Packaging, but make it poetic.', icon: 'P' },
  { id: 'social-media', name: 'Social Media', description: 'Digital narratives, beautifully told.', icon: 'S' },
  { id: 'stationery', name: 'Stationery', description: 'Tactile stories, elegantly crafted.', icon: 'T' },
  { id: 'coffee-table-books', name: 'Coffee Table Books', description: 'Legacy pieces, designed to inspire.', icon: 'C' },
  { id: 'creative-projects', name: 'Creative Projects', description: 'Your unique vision, brought to life.', icon: 'CP' },
];

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
    <ServicesWrapper 
      id="services"
      variants={sectionVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }}
    >
      <SectionTitle>What We Do</SectionTitle>
      <SectionSubtitle>
        From foundational branding to bespoke creative ventures, we craft visual narratives that speak with quiet confidence and lasting impact.
      </SectionSubtitle>
      <ServicesGrid>
        {servicesData.map((service) => (
          <ServiceCard key={service.id} variants={cardVariants}>
            {/* Placeholder for actual icons; for now, it renders the 'icon' string. */}
            <IconPlaceholder aria-hidden="true">{service.icon}</IconPlaceholder> 
            <ServiceName>{service.name}</ServiceName>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesWrapper>
  );
};

export default ServicesSection;
