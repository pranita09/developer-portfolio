import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import buzzbird from "../../Assets/Projects/buzzbird thumbnail.png";
import plantique from "../../Assets/Projects/plantique thumbnail.png";
import bananaTalk from "../../Assets/Projects/banana-talk-app.png";
import funTranslator from "../../Assets/Projects/fun-translations.png";
import emoticons from "../../Assets/Projects/know-your-emoticons.png";
import foodplaza from "../../Assets/Projects/foodplaza.png";
import mailApp from "../../Assets/Projects/mailApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buzzbird}
              isBlog={false}
              title="BuzzBird"
              description="A Social Media App to connect and hangout with friends build with react.js, TailwindCSS, Material-UI Components, and mockBee. Have features which allows user for add/delete/edit posts, edit user profile."
              ghLink="https://github.com/pranita09/buzzbird"
              demoLink="https://buzzbird-v1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plantique}
              isBlog={false}
              title="Plantique Store"
              description="Plantique is an e-commerce app that stores various plants that can be showcased and sold online. It has features like cart management, wishlist management, payment integration and other features required in e-commerce."
              ghLink="https://github.com/pranita09/plantique-v1"
              demoLink="https://plantique-v1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mailApp}
              isBlog={false}
              title="Mail App"
              description="A simple Mail App, built with ReactJS to practice concepts like useContext, useReducer, etc. It has features like filter mails, move to trash or spam foldres, mark as read or unread and single mail page using React Router."
              ghLink="https://github.com/pranita09/email-app-v2"
              demoLink="https://w7kqum-3000.csb.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bananaTalk}
              isBlog={false}
              title="Banana - Talk"
              description="This is an app built with Vanilla Javascript and an fun translation API. This converts normal English Language in Minions's Language. This is a fun app. You can share this with your friends and ask them to have fun..!!!"
              ghLink="https://github.com/pranita09/banana-talk-app"
              demoLink="https://banana-talk-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={funTranslator}
              isBlog={false}
              title="Fun Translations"
              description="An application is built with Vanilla Javascript and API's from FunTranslations. This has 3 different fun translation API's used in it. For the languages of Pirates, Groot, Shakespeare. Share this with your friends and have fun..!!"
              ghLink="https://github.com/pranita09/fun-translator-app"
              demoLink="https://funtranslations.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emoticons}
              isBlog={false}
              title="Know your emojis"
              description="This is an Emoji Interpreter application built with ReactJS in the online editor named as codeSandBox. This tells the meaning of the emojis that we will enter. Also, it has it's own Dictonary of Emoji's having meanings.This is a fun app!"
              ghLink="https://github.com/pranita09/know-your-emoticons"
              demoLink="https://83d19.csb.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodplaza}
              isBlog={false}
              title="Food Plazzza"
              description="A simple food type interpreter app built using ReactJS in an online editor codeSandBox. This is like a Menu Card of a hotel. It has different types of food sections. This is a fun app. Made to practice ReactJS."
              ghLink="https://github.com/pranita09/food-plazza"
              demoLink="https://5j1p9.csb.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
