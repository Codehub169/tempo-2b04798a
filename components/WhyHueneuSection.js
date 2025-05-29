import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const WhyHueneuSectionContainer = styled.section`
  padding: 8rem clamp(2rem, 5vw, 4rem);
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 6rem clamp(1.5rem, 4vw, 3rem);
    min-height: 60vh;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  line-height: 1.3;
`;

const PoeticText = styled(motion.p)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary || theme.colors.text};
  max-width: 700px;
  margin-bottom: 2.5rem;
  white-space: pre-line; /* To respect newlines in the copy */

  &:last-of-type {
    margin-bottom: 0;
  }

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const HighlightBar = styled(motion.div)`
  width: 80px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.accent};
  margin: 1rem auto 3rem;
  border-radius: 2px;
`;

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: 'easeOut'
    }
  })
};

const WhyHueneuSection = () => {
  return (
    <WhyHueneuSectionContainer id="why-hueneu">
      <SectionTitle
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        custom={0}
        variants={textVariants}
      >
        Why hueneu?
      </SectionTitle>
      <HighlightBar 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.7, ease: 'circOut' }}
      />
      <PoeticText
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        custom={1}
        variants={textVariants}
      >
        We don	 just design 
 <strong>we decode stories</strong>.
        We believe in the quiet power of visuals that resonate deeply,
        crafting aesthetics that feel both familiar and surprisingly new.
      </PoeticText>
      <PoeticText
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        custom={2}
        variants={textVariants}
      >
        Our approach is rooted in <strong>calm</strong>, sprinkled with <strong>mystery</strong>, and always seeking <strong>balance</strong>.
        The result? Designs that speak quietly but stay with you, long after you	ve looked away.
      </PoeticText>
    </WhyHueneuSectionContainer>
  );
};

export default WhyHueneuSection;
