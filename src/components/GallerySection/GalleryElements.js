import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GalleryContainer = styled.div`
  background: #32302f;
  justify-content: center;
  align-items: center;
  padding: 2rem 30px;
  height: auto;
  position: relative;
  z-index: 1;
  padding-bottom: 2rem;
`;

//Add before styles

export const GalleryVideo = styled.div`
  background-color: #83a598;
  position: absolute;
  opacity: 90%;
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
  font-size: 18px;
`;

export const GalleryH1 = styled.h1`
  color: #83a598;
  font-size: 35px;
  text-align: center;
`;

export const GalleryP = styled.p`
  color: #83a598;
  font-size: 18px;
  text-align: center;
  padding: 40px 0;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const GalleryP2 = styled.p`
  color: #32302f;
  font-size: 18px;
  text-align: center;
  padding: 40px 0;
  font-weight: bold;

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

export const NavBtnLink = styled(Link)`
  border-radius: 0.5rem;
  white-space: nowrap;
  padding: 10px 22px;
  //background: #83a598;
  color: #83a598;
  font-size: 18px;
  //font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
