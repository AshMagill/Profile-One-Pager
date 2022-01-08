import styled from 'styled-components';

export const GalleryContainer = styled.div`
  background: #32302f;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-height: 1400px) {
    height: 1500px;
  }
  @media screen and (max-height: 1200px) {
    height: 1200px;
  }
  @media screen and (max-width: 768px) {
    height: 1700px;
  }

  @media screen and (max-width: 480px) {
    height: 3350px;
  }
  @media screen and (max-width: 480px) {
    height: 3350px;
  }

  @media screen and (max-width: 430px) {
    height: 3000px;
  }
  @media screen and (max-width: 400px) {
    height: 2500px;
  }
  @media screen and (max-width: 380px) {
    height: 2850px;
  }
  @media screen and (max-width: 360px) {
    height: 2560px;
  }
`;

//Add before styles

export const GalleryVideo = styled.div`
  background-color: #83a598;
  position: absolute;
  opacity: 95%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;

export const GalleryText = styled.div`
  font-family: monospace;
  text-align: center;
  color: #282828;
  font-size: 0.5rem;
`;

export const GalleryH1 = styled.h1`
  color: #83a598;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const GalleryP = styled.p`
  color: #83a598;
  font-size: 24px;
  text-align: center;
  padding: 40px 0;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const GalleryGrid = styled.div`
  margin: auto;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-radius: 0.5rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
