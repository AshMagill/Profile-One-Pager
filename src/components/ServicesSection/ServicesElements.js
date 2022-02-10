import styled from 'styled-components';

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
  grid-gap: 40px;
  padding: 0;

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
font-size: 40px
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 40px;
  color: #83a598;
  margin-bottom: 64px;

  @media screen and (max-width: 408px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const ServicesH2 = styled.h2`
  text-align: center;
  font-size: 40px;
  margin-bottom: 10px;
  color: #83a598;
`;

export const ServicesP2 = styled.p`
  font-size: 24px;
  text-align: center;
  color: #83a598;
  width: 100px;
`;
export const ServicesP = styled.p`
  font-size: 24px;
  text-align: center;
  color: #83a598;
  margin: 30px;
`;
