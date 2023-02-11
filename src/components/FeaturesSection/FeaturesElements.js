import styled from "styled-components";

export const FeaturesContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  background: #32302f;
`;

export const FeaturesWrapper = styled.div`
  max-width: 1000px;
  //margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 30px;
  }
`;

export const FeaturesCard = styled.div`
  background: #32302f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 340px;
  transition: all 0.2s ease-in-out;
  margin-bottom: 2rem;
`;

export const FeaturesIcon = styled.img`
  //height: 160px;
  //width: 160px;
  //margin-bottom: 10px;
`;

export const FeaturesH1 = styled.h1`
  font-size: 35px;
  color: #83a598;
  margin-bottom: 2rem;

  @media screen and (max-width: 408px) {
    //font-size: 2rem;
    //margin-bottom: 1rem;
  }
`;

export const FeaturesH2 = styled.h2`
  text-align: center;
  font-size: 18px;
  margin-bottom: 1rem;
  color: #83a598;
`;

export const FeaturesP = styled.p`
  font-size: 18px;
  text-align: center;
  color: #83a598;
`;
