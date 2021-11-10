import { ReactComponent as ReactSVG } from "../svgs/tool-svgs/react.svg";
import { ReactComponent as MongoSVG } from "../svgs/tool-svgs/mongodb.svg";
import { ReactComponent as DockerSVG } from "../svgs/tool-svgs/docker.svg";
import { ReactComponent as HerokuSVG } from "../svgs/tool-svgs/heroku.svg";
import { ReactComponent as NodejsSVG } from "../svgs/tool-svgs/node.svg";
import { ReactComponent as ExpressSVG } from "../svgs/tool-svgs/express.svg";
export const Services = (props) => {
  return (
    <div>
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="service-desc">
                  <ReactSVG
                    style={{ height: 100, width: 100, fill: "#FFFFFF" }}
                  />
                  <h3>name</h3>
                  <p>txt</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-desc">
                  <MongoSVG
                    style={{ height: 100, width: 100, fill: "#FFFFFF" }}
                  />
                  <h3>name</h3>
                  <p>txt</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-desc">
                  <DockerSVG
                    style={{ height: 100, width: 100, fill: "#FFFFFF" }}
                  />
                  <h3>name</h3>
                  <p>txt</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-desc">
                  <HerokuSVG
                    style={{ height: 100, width: 100, fill: "#FFFFFF" }}
                  />
                  <h3>name</h3>
                  <p>txt</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-desc">
                  <NodejsSVG
                    style={{ height: 100, width: 100, fill: "#FFFFFF" }}
                  />
                  <h3>name</h3>
                  <p>txt</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-desc">
                  <ExpressSVG
                    style={{ height: 100, width: 100, fill: "#FFFFFF" }}
                  />
                  <h3>name</h3>
                  <p>txt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
