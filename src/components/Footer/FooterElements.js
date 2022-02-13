import styled from 'styled-components';

export const Footer = styled.nav`
  background: #83a598;
  height: 80px;
  font-size: 18px;
  transition: 0.8s all ease;
  @media screen and (max-width: 950px) {
    height: 160px;
    width: 100%;
  }
`;

export const FooterMenu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
  @media screen and (max-width: 950px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const FooterItem = styled.li`
  height: 80px;
  padding: 30px;
  font-weight: bold;
  color: #32302f;
`;

export const FooterIcon = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 30px;
  }
`;
