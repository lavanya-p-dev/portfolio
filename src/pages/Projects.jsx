import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import leapyearchecker from "../assets/projects/leapyearchecker.png";
import onlinegymmngsystem from "../assets/projects/onlinegymmngsystem.png";
import phonebookapp from "../assets/projects/phonebookapp.png";
import stockmngsystem from "../assets/projects/stockmngsystem.png";
import urlshortener from "../assets/projects/urlshortener.png";
import weatherapp from "../assets/projects/weatherapp.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* <h1 className="project-heading">
        <strong className="yellow">My Projects </strong>
        </h1> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phonebookapp}
              title="Phonebook App"
              description="This project is a phonebook application built with Flask and MYSQL. It allows users to add, update, and delete contacts, as well as search for contacts by name. The application is designed with a user-friendly interface and includes a login system for user authentication. The backend is powered by Flask, while the frontend is built with HTML, CSS, and Bootstrap. MYSQL is used as the database."
              ghLink="https://github.com/PureddyLavanya/phonebook_flask"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockmngsystem}
              title="Stock Management System"
              description="Web Application designed using django and SQLite. It allows users to add, update, and delete products, as well as search for products by name. The application is designed with a user-friendly interface and includes a login system for user authentication. The backend is powered by Flask, while the frontend is built with HTML, CSS, and Bootstrap.SQLite is used as the database."
              ghLink="https://github.com/PureddyLavanya/Stock_Management_System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urlshortener}
              title="URL Shortener"
              description="Flask web tool developed to provide features of url shortening. It is designed to shorten the long urls to short urls and allow the users to access any kind of url easily through providing a key. Storing the urls and keys in a json file makes the application easy to manage and user friendly."
              ghLink="https://github.com/PureddyLavanya/URL_SHORTNER_Flask"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onlinegymmngsystem}
              title="Online Gym Management System"
              description="PHP based web application designed to manage the gym activities. It allows users to register, login, access health checking tools, top 10 blogs on health. Users data management is done through trainer dashboard by accessing MySQL database."
              ghLink="https://github.com/PureddyLavanya/OnlineGymManagementSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leapyearchecker}
              title="Leap Year Checker"
              description="Flask web application designed to check if a given year is a leap year or not through accessing a form. Using bootstrap for the frontend and flask for the backend makes application user friendly through providing effective user interface."
              ghLink="https://github.com/PureddyLavanya/Leap_Year_Checker_Flask"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              title="Weather App"
              description="A web application that allows users to search for the current weather conditions of specific city. The application is built using React.js,Node.js,Express.js and the OpenWeatherMap API. Users can search for a city by name and view the current temperature, humidity, and weather conditions."
              ghLink="https://github.com/PureddyLavanya/WeatherApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
