import styled from 'styled-components';
import Image from '../../images/intro-bg.jpg';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

//Add before styles

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #504945;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  filter: blur(1px);
  opacity: 40%;
`;
export const HeroImg = styled.img`
  background: ${Image};
  width: 100%;
  height: 100%;
  objectfit: cover;
  filter: blur(2px);
  opacity: 50%;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fbf1c7;
  font-size: 35px;
  text-align: center;

  @media screen and (max-width: 768px) {
    //font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    //font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fbf1c7;
  font-size: 18px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    //font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
