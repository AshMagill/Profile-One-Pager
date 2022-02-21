import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #32302f;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: end;
`;

export const Icon = styled(Link)`
  margin-top: 1rem;
  margin-right: 2rem;
  text-decoration: none;
  color: #fb4934;
  font-size: 28px;
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 35px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
  }
`;

export const Form = styled.form`
  background: #32302f;
  max-width: 400px;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 2rem;
  @media screen and (max-width: 400px) {
  }
`;

export const FormH1 = styled.h1`
  color: #83a598;
  font-size: 28px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
  @media screen and (max-width: 480px) {
    font-size: 28px;
    color: #fbf1c7;
  }
`;

export const FormLabel = styled.label`
  font-size: 18px;
  color: #fbf1c7;
  height: 2rem;
`;

export const FormInput = styled.input`
  margin-bottom: 1rem;
  border: none;
  border-radius: 0.5rem;
  background: #fbf1c7;
  height: 3rem;
  padding: 1rem;
  font-size: 18px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const MessageInput = styled.textarea`
  margin-bottom: 1rem;
  border: none;
  border-radius: 0.5rem;
  background: #fbf1c7;
  height: 15rem;
  width: 100%;
  padding: 1rem;
  font-size: 18px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const FormButton = styled.button`
  background: #83a598;
  border: none;
  border-radius: 0.5rem;
  color: #32302f;
  font-size: 18px;
  cursor: pointer;
  height: 3rem;
  margin-top: 1rem;
  text-decoration: none;
`;

export const Text = styled.span`
  text-align: center;
  color: #fff;
`;
