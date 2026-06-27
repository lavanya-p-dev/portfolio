import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
// import Social from '../components/Contact/Social';
import {Row, Col} from 'react-bootstrap'
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode,SiCodechef } from "react-icons/si";

const Contact = () => {
  return (
    <Container style={{padding: '60px'}}>
      <Particle />
      <ContactForm />
      {/* <Social /> */}
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
          Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/lavanya-p-dev"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.codechef.com/users/lavanyapureddy"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="codechef"
              >
                <SiCodechef />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/pureddylavanya/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/Lavanyap89/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                aria-label="leetcode"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact