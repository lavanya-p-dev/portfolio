import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiLinux,
  DiGithub
} from "react-icons/di";
import {
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiCplusplus,
  SiC,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiPostman
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h6 className="tech-icon-text">HTML5</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <h6 className="tech-icon-text">CSS3</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6 className="tech-icon-text">JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h6 className="tech-icon-text">TypeScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <h6 className="tech-icon-text">Bootstrap</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h6 className="tech-icon-text">Tailwind CSS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6 className="tech-icon-text">Node.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6 className="tech-icon-text">React.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h6 className="tech-icon-text">Redux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6 className="tech-icon-text">Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
        <h6 className="tech-icon-text">GitHub</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <h6 className="tech-icon-text">C++</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <h6 className="tech-icon-text">C</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6 className="tech-icon-text">Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
        <h6 className="tech-icon-text">Linux</h6>
      </Col>
    </Row>
  );
};
export default Techstack;
