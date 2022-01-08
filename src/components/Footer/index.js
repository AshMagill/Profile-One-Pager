import React from "react";

import { ReactComponent as GitLogo } from "../../svgs/iconmonstr-github-1.svg";
import {
  Footer,
  FooterbarContainer,
  FooterItem,
  FooterMenu,
  FooterIcon,
} from "./FooterElements";

const Footerbar = () => {
  return (
    <>
      <Footer>
        <FooterMenu>
          <FooterItem>info@proshops.co.nz</FooterItem>
          <FooterIcon>
            <a href="https://www.github.com/ashmagill">
              <GitLogo
                style={{
                  fill: "#32302f",

                  height: "50px",
                  width: "50px",
                }}
              />
            </a>
          </FooterIcon>
        </FooterMenu>
      </Footer>
    </>
  );
};

export default Footerbar;
