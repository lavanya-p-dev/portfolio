import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer" style={{display: 'flex', justifyContent: 'center'}}>
        <Row>
          <Col  className="footer-copywright ">
            <span>Copyright © {year}</span>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer