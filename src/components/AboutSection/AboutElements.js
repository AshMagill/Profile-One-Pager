import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #83a598;

  @media screen and (max-width: 1000px) {
    height: 1400px;
  }

  @media screen and (max-width: 786px) {
    height: 1450px;
  }

  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`;

export const AboutWrapper = styled.div`
{  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  //padding: 30px 0;
width: 100%;
  @media screen and (max-width: 1000px) {
  flex-direction: column;
  }

  @media screen and (max-width: 768px) {
}
`;

export const FlexA = styled.div`
  height: 100%;
  width 100%;
  background: #32302f;
      //clip-path: polygon(15% 15%, 15% 85%, 85% 85%, 85% 15%);


`;
export const FlexB = styled.div`
  height: 100%;
  width 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0;
  transition: all 0.2s ease-in-out;

`;
//for now I will make them all divs and color them, then I will add content later

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 60%;
  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
  }
`;
export const AboutH1 = styled.h1`
  color: #32302f;
  text-align: center;
  padding: 20px 0;
  margin-top: 3rem;
  }

  @media screen and (max-width: 768px) {
  margin-top: 0rem;
  }
`;
export const AboutP = styled.p`
  font-weight: bold;
  color: #32302f;
  text-align: center;
  padding: 20px 0;
  margin: 0 20px;
  }

  @media screen and (max-width: 768px) {
  }
`;
export const AboutH2 = styled.h2`
  color: #32302f;
  text-align: center;
  padding: 50px 0;
  @media screen and (max-width: 1000px) {
  }
  padding: 30px 0;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;
export const AboutPointsA = styled.div`
  margin: 0 20px;
`;
export const AboutPointsB = styled.div`
  margin: 0 20px;
`;

export const AboutPoints = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
  }
`;

export const AboutParagraph = styled.div`
  font-weight: bold;
  color: #32302f;
  text-align: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const AboutTick = styled.div`
  margin-bottom: 2rem;
  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    margin-left: 1rem;
  }
`;
