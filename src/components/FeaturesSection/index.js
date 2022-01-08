import React from "react";
import { ReactComponent as Icon1 } from "../../svgs/delivery-package-opened-svgrepo-com.svg";
import { ReactComponent as Icon2 } from "../../svgs/iconmonstr-credit-card-1.svg";
import { ReactComponent as Icon3 } from "../../svgs/paint-tool.svg";
import { ReactComponent as Icon4 } from "../../svgs/security-on-svgrepo-com.svg";
import {
  FeaturesContainer,
  FeaturesH1,
  FeaturesWrapper,
  FeaturesCard,
  FeaturesH2,
  FeaturesP,
} from "./FeaturesElements";

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <FeaturesH1>Features</FeaturesH1>
      <FeaturesWrapper>
        <FeaturesCard>
          <Icon1
            style={{
              height: "120px",
              width: "120px",
              marginBottom: "20px",
              fill: "#32302f",
              border: "1px  solid  #83a598",
              borderRadius: "1rem",
              background: "#83a598",
              padding: "0.5rem",
            }}
          />
          <FeaturesH2>Easily Manage Products</FeaturesH2>
          <FeaturesP>
            Admin area to manage customers, products & orders
          </FeaturesP>
        </FeaturesCard>
        <FeaturesCard>
          <Icon2
            style={{
              height: "120px",
              width: "120px",
              marginBottom: "20px",
              fill: "#32302f",
              border: "1px  solid  #83a598",
              borderRadius: "1rem",
              background: "#83a598",
              padding: "0.5rem",
            }}
          />
          <FeaturesH2>Set Up Online Transactions</FeaturesH2>
          <FeaturesP>
            Full featured shopping cart with PayPal & credit/debit payments
          </FeaturesP>
        </FeaturesCard>
        <FeaturesCard>
          <Icon4
            style={{
              height: "120px",
              width: "120px",
              marginBottom: "20px",
              fill: "#32302f",
              border: "1px  solid  #83a598",
              borderRadius: "1rem",
              background: "#83a598",
              padding: "0.5rem",
            }}
          />
          <FeaturesH2> Secure Your Database</FeaturesH2>
          <FeaturesP>
            Latest authentication and database encription practices
          </FeaturesP>
        </FeaturesCard>
        <FeaturesCard>
          <Icon3
            style={{
              height: "120px",
              width: "120px",
              marginBottom: "20px",
              fill: "#32302f",
              border: "1px  solid  #83a598",
              borderRadius: "1rem",
              background: "#83a598",
              padding: "0.5rem",
            }}
          />
          <FeaturesH2>Customise User Interface</FeaturesH2>
          <FeaturesP>
            Change the layout and style of your platform with custom code
          </FeaturesP>
        </FeaturesCard>
      </FeaturesWrapper>
    </FeaturesContainer>
  );
};

export default Features;
