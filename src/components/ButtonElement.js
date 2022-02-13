import styled from 'styled-components';
import { Link } from 'react-scroll';

const Button = styled(Link)`
  background: #83a598;
  color: #32302f;
  font-weight: bold;
  border-radius: 0.5rem;
  white-space: nowrap;
  padding: 14px 48px;
  font_size: 18px;
  ouline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #83a598;
    color: #32302f;
  }
`;

export default Button;
