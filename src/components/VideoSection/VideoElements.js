import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';

export const VideoPlayer = styled(Player)`
  margin-top: 1rem;
  @media screen and (max-width: 700px) {
    margin-top: 50%;
  }
  @media screen and (max-height: 380px) {
    margin-top: 0rem;
  }
`;

export const Container = styled.div`
  padding-top: 10px;
  position: fixed;
  height: 100%;
  width: 100%;
  background: #32302f;
`;
export const VideoContainer = styled.div`
  background: #32302f;
  width: 70%;
  margin: 0 auto;
  @media screen and (max-width: 700px) {
    width: 95%;
  }
  @media screen and (max-height: 380px) {
    width: 80%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: end;
`;

export const Exit = styled(Link)`
  margin-top: rem;
  margin-right: 1rem;
  padding-right: 1rem;
  text-decoration: none;
  color: #fb4934;
  font-size: 28px;
  @media screen and (max-width: 480px) {
    margin-left: 0rem;
    text-align: center;
    font-size: 35px;
    margin-top: 0px;
  }
  @media screen and (max-height: 380px) {
    margin-top: 0.5rem;
  }
`;
