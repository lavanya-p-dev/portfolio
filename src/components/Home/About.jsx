import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.4em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                  Frontend Developer with around 2 years of professional experience specializing in building responsive and user-friendly web applications using <span className="yellow">React</span> and <span className="yellow">Angular</span>. Proven track record of modernizing legacy systems, implementing modular UI architectures, and collaborating effectively in <span className="yellow">Agile</span> teams to deliver high-quality web solutions.
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About