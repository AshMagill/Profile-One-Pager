import styled from 'styled-components';

export const AboutContainer = styled.div`
   {
    width: 100;
    height: 800px;
    justify-content: center;
    display: flex
    flex-direction: column;
    align-items: center;
    background: #32302f;
    height: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  //@media screen and (max-width: 1650px) {
    //height: 1100px;
    //padding-bottom: 2rem;
  //}

  //@media screen and (max-width: 1450px) {
    //height: 1200px;
    //padding-bottom: 2rem;
  //}

  //@media screen and (max-width: 1350px) {
    //height: 1200px;
    //padding-bottom: 2rem;
  //}

  //@media screen and (max-width: 1280px) {
    //height: 1400px;
    //padding-bottom: 2rem;
  //}

  //@media screen and (max-width: 1150px) {
    //height: 1700px;
    //padding-bottom: 2rem;
  //}

  //@media screen and (max-width: 786px) {
    //height: 1700px;
  //}

  //@media screen and (max-width: 700px) {
    //height: 1900px;
  //}

  //@media screen and (max-width: 480px) {
    //height: 2200px;
    //padding-bottom: 3rem;
  //}
`;

export const FlexB = styled.div`
  height: 100%;
  width 100%;
  display: flex;
  font-size: 18px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  //padding: 30px 0;
  transition: all 0.2s ease-in-out;

`;

export const ImgBackground = styled.div`
  background-color: #32302f;
  overflow: hidden;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0.5rem solid #83a598;
  @media screen and (max-width: 1000px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const AboutImage = styled.img`
  overflow: hidden;
  height: 100%;
  width: auto;
  opacity: 77%;
  transform: scale(1.3);
  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
  }
`;

export const AboutH1 = styled.h1`
  color: #83a598;
  text-align: center;
  margin-top: 1rem;
  //padding: 20px 0;
  font-size: 35px
  }

  @media screen and (max-width: 768px) {
  }
`;

export const AboutP = styled.p`
  color: #83a598;
  text-align: center;
  padding: 20px 0;
  margin: 0 200px;
  font-size: 18px;
  }

  @media screen and (max-width: 768px) {
  margin: 0 18px;
  font-size: 16px;
  }
`;

export const AboutH2 = styled.h2`
  color: #83a598;
  text-align: center;
  font-size: 25px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
  }
`;

export const AboutPointsA = styled.div`
  margin: 0 1rem;
  color: #83a598;
`;

export const AboutPointsB = styled.div`
  margin: 0 1rem;
  color: #83a598;
`;

export const AboutPoints = styled.div`
  color: #83a598;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutPoint = styled.div`
  color: #83a598;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AboutParagraph = styled.div`
  //font-weight: bold;
  color: #83a598;
  text-align: center;
  margin-bottom: 2rem;
`;

export const AboutTick = styled.div`
  height: 1rem;
  width: 1rem;
  fill: #83a598;
  margin-bottom: 2rem;
  margin-left: 2rem;
`;
