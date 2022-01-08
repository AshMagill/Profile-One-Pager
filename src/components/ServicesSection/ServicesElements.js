import styled from "styled-components";

export const ServicesContainer = styled.div`
  width: 100;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #32302f;
  padding: 5rem 0;

  @media screen and (max-width: 786px) {
    height: 1900px;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  padding: 0 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 30px;
  }
`;

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 340px;
  padding: 30px 0;
  transition: all 0.2s ease-in-out;
`;

export const ServicesIcon = styled.img`
  //height: 160px;
  //width: 160px;
  //margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font_size: 2.5rem;
  color: #83a598;
  margin-bottom: 64px;

  @media screen and (max-width: 408px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const ServicesH2 = styled.h2`
  text-align: center;
  font_size: 0.8rem;
  margin-bottom: 10px;
  color: #83a598;
`;

export const ServicesP2 = styled.p`
  font_size: 0.8rem;
  text-align: center;
  color: #83a598;
`;
export const ServicesP = styled.p`
  font_size: 0.8rem;
  text-align: center;
  color: #83a598;
  margin: 30px;
`;
