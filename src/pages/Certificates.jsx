import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "../components/Certificates/CertificateCard";
import merncert from "../assets/certificates/merncert.jpg";
import sqlcert from "../assets/certificates/sqlcert.jpg";
import gitandgithubcert from "../assets/certificates/gitandgithubcert.jpg";
import codingcert from "../assets/certificates/codingcert.jpeg";
import uiuxcert from "../assets/certificates/ui-ux.jpeg";
import aicert from "../assets/certificates/ai.jpg";

const Certificates = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        {/* <h2>
            <strong className="yellow">My Certifications </strong>
        </h2> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={merncert}
              title="MERN Stack Development"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={uiuxcert}
              title="UI/UX Design"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={aicert}
              title="AI Foundations"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={gitandgithubcert}
              title="Git and GitHub"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={codingcert}
              title="Coding"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={sqlcert}
              title="SQL"
            />
          </Col>          
        </Row>
      </Container>
    </Container>
  )
}

export default Certificates