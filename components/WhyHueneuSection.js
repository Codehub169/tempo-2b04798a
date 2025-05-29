import React from 'react';
import { motion } from 'framer-motion';
import {
  WhyHueneuSectionContainer,
  SectionTitle,
  PoeticTextContainer,
  PoeticText,
  HighlightBar,
  containerVariants, // Imported from .styled.js
  textVariants,      // Imported from .styled.js
  barVariants        // Imported from .styled.js
} from './WhyHueneuSection.styled';


const WhyHueneuSection = () => {
  return (
    <WhyHueneuSectionContainer 
      id="why-hueneu"
      variants={containerVariants} // Using variant from .styled.js for orchestration
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionTitle
        variants={textVariants} // Using variant from .styled.js
      >
        Why hueneu?
      </SectionTitle>
      <HighlightBar 
        variants={barVariants} // Using variant from .styled.js
      />
      <PoeticTextContainer 
        variants={textVariants} // Applying textVariants to the container for its own animation
                                 // The PoeticText children will animate simultaneously with this container
                                 // as per textVariants from .styled.js (not individually staggered by 'custom' prop here)
      >
        <PoeticText
          variants={textVariants} // Using variant from .styled.js
          dangerouslySetInnerHTML={{ __html: `We don't just design <br /><strong>we decode stories</strong>.<br />We believe in the quiet power of visuals that resonate deeply,<br />crafting aesthetics that feel both familiar and surprisingly new.`}}
        >
        </PoeticText>
        <PoeticText
          variants={textVariants} // Using variant from .styled.js
          dangerouslySetInnerHTML={{ __html: `Our approach is rooted in <strong>calm</strong>, sprinkled with <strong>mystery</strong>, and always seeking <strong>balance</strong>.<br />The result? Designs that speak quietly but stay with you, long after you've looked away.`}}
        >
        </PoeticText>
      </PoeticTextContainer>
    </WhyHueneuSectionContainer>
  );
};

export default WhyHueneuSection;
