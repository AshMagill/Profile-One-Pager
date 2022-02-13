import React from 'react';
import Image from '../../images/intro-bg.jpg';
import Button from '../ButtonElement';
import {
  HeroContainer,
  HeroBg,
  HeroImage,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroImage src={Image} alt='sorry, it appears this image is missing' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Thinking of selling online?</HeroH1>
        <HeroP>
          Build an affordable ecommerce platform your way without compromises,
          using real code.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Learn more
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
