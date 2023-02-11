import React from "react";
import { ReactComponent as Icon1 } from "../../svgs/tool-svgs/mongodb.svg";
import { ReactComponent as Icon2 } from "../../svgs/tool-svgs/node.svg";
import { ReactComponent as Icon3 } from "../../svgs/tool-svgs/react.svg";
import { ReactComponent as Icon4 } from "../../svgs/tool-svgs/docker.svg";
import { ReactComponent as Icon5 } from "../../svgs/tool-svgs/aws.svg";
import { ReactComponent as Icon6 } from "../../svgs/tool-svgs/express.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesP2,
  ServicesH2,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Tools</ServicesH1>
      <ServicesH2>
        The following are tools that I use to make my websites, all are well
        known as being modern and reliable.
      </ServicesH2>
      <ServicesWrapper>
        <a href="https://www.mongodb.com" style={{ textDecoration: "none" }}>
          <ServicesCard>
            <Icon1
              style={{
                height: "120px",
                width: "120px",
                marginBottom: "20px",
                fill: "#589636",
                padding: "0.5rem",
              }}
            />
            <ServicesP2>
              Database:
              <br />
              MongoDB
            </ServicesP2>
          </ServicesCard>
        </a>
        <a href="https://www.expressjs.com" style={{ textDecoration: "none" }}>
          <ServicesCard>
            <Icon6
              style={{
                height: "120px",
                width: "120px",
                marginBottom: "20px",
                fill: "#888",
                padding: "0.5rem",
              }}
            />
            <ServicesP2>
              Server: <br />
              Express
            </ServicesP2>
          </ServicesCard>
        </a>
        <a href="https://www.reactjs.com" style={{ textDecoration: "none" }}>
          <ServicesCard>
            <Icon3
              style={{
                height: "120px",
                width: "120px",
                marginBottom: "20px",
                fill: "#00d8ff",
                padding: "0.5rem",
              }}
            />
            <ServicesP2>
              Client: <br />
              React
            </ServicesP2>
          </ServicesCard>
        </a>
        <a href="https://www.docker.com" style={{ textDecoration: "none" }}>
          <ServicesCard>
            <Icon4
              style={{
                height: "120px",
                width: "120px",
                marginBottom: "20px",
                fill: "#0db7ed",
                padding: "0.5rem",
              }}
            />
            <ServicesP2>
              Container: <br />
              Docker
            </ServicesP2>
          </ServicesCard>
        </a>
        <a href="https://www.aws.com" style={{ textDecoration: "none" }}>
          <ServicesCard>
            <Icon5
              style={{
                height: "120px",
                width: "120px",
                marginBottom: "20px",
                fill: "#c9c3e6",
                padding: "0.5rem",
              }}
            />
            <ServicesP2>
              Hosting:
              <br />
              AWS
            </ServicesP2>
          </ServicesCard>
        </a>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
