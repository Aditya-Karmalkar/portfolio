import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditya Karmalkar </span>
            from <span className="purple">Pune, India.</span>
            <br />
            I am a passionate full-stack web developer with a strong interest in building user-friendly, scalable web applications.
            <br />
            I’m currently pursuing a B.E. in Information Technology from Trinity Academy of Engineering.
            <br />
            <br />
            Apart from coding, here are a few things I love doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Songs & Lyrics
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Side Projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Consistency beats motivation. Show up, even on the hard days."
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}


export default AboutCard;
