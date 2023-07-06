import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranita Fulsundar </span>
            from <span className="purple"> Pune, India.</span>
            <br /> I am a Computer Science graduate from Savitribai Phule Pune
            University.
            <br />
            Currently, I am learning Web Development and Frontend Skills and
            building projects in it.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hard work breeds transformative change!"{" "}
          </p>
          <footer className="blockquote-footer">Pranita</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
