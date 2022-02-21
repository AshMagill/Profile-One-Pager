import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';

export const VideoPlayer = styled(Player)``;

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: #32302f;
`;
export const VideoContainer = styled.div`
  background: #32302f;
  width: 70%;
  margin: 0 auto;
`;

export const Exit = styled(Link)`
  margin-top: 1rem;
  margin-left: 2rem;
  text-decoration: none;
  color: #83a598;
  font-size: 28px;
  @media screen and (max-width: 480px) {
    margin-left: 0rem;
    text-align: center;
    font-size: 35px;
  }
`;
