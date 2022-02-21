import React from 'react';
import Image from '../../images/ashcrop.jpg';
import { ReactComponent as Tick } from '../../svgs/mark_check_tick_icon_194733.svg';

import {
  AboutContainer,
  AboutImage,
  ImgBackground,
  AboutH1,
  AboutP,
  AboutH2,
  AboutPoints,
  AboutPointsA,
  AboutPointsB,
  AboutPoint,
  FlexB,
  AboutParagraph,
  AboutTick,
} from './AboutElements';

const About = () => {
  return (
    <AboutContainer id='about'>
      <ImgBackground>
        <AboutImage src={Image} alt='whoopsie, the image is missing!' />
      </ImgBackground>
      <FlexB>
        <AboutH1>About Myself</AboutH1>
        <AboutP>
          My name is Ash Magill and I am a full-stack web developer.
          <br />
          <br />I use real code, not templates like Wix or Shopify, this means
          you can have full control over how your online store looks and acts,
          and because I use open source reusable code, I am just as affordable.
          <br />
          <br /> I only charge for the code I create, the code I find online is
          usually under an MIT license, meaning its completely free to integrate
          it into your website. I only charge for the work I do customising it
          and hosting it online.
        </AboutP>
        <AboutH2>Why Choose Me?</AboutH2>
        <AboutPoints>
          <AboutPointsA>
            <AboutPoint>
              <AboutParagraph>
                <p>Competetive Pricing</p>
              </AboutParagraph>
              <AboutTick>
                <Tick />
              </AboutTick>
            </AboutPoint>
            <AboutPoint>
              <AboutParagraph>
                <p>Custom-built Designs</p>
              </AboutParagraph>
              <AboutTick>
                <Tick />
              </AboutTick>
            </AboutPoint>
            <AboutPoint>
              <AboutParagraph>
                <p>NZ Owned and Operated</p>
              </AboutParagraph>
              <AboutTick>
                <Tick />
              </AboutTick>
            </AboutPoint>
            <AboutPoint>
              <AboutParagraph>
                <p>Attention to Detail</p>
              </AboutParagraph>
              <AboutTick>
                <Tick />
              </AboutTick>
            </AboutPoint>
          </AboutPointsA>
          <AboutPointsB>
            <AboutPoint>
              <AboutParagraph>
                <p>Long Term Support</p>
              </AboutParagraph>
              <AboutTick>
                <Tick />
              </AboutTick>
            </AboutPoint>
            <AboutPoint>
              <AboutParagraph>
                <p>Modern Development Practices</p>
              </AboutParagraph>
              <AboutTick>
                <Tick />
              </AboutTick>
            </AboutPoint>
            <AboutPoint>
              <AboutParagraph>
                <p>Specialist in Ecommerce</p>
              </AboutParagraph>
              <AboutTick>
                <Tick />
              </AboutTick>
            </AboutPoint>
            <AboutPoint>
              <AboutParagraph>
                <p>Good Comunication</p>
              </AboutParagraph>
              <AboutTick>
                <Tick />
              </AboutTick>
            </AboutPoint>
          </AboutPointsB>
        </AboutPoints>
      </FlexB>
    </AboutContainer>
  );
};

export default About;
