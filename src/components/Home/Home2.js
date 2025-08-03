import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroGif from "../../Assets/home3.gif";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a self-taught and academically trained web developer with a strong passion for tech and innovation.
              <br />
              <br />I am proficient in technologies like
              <i>
                <b className="purple"> C++, JavaScript, and Python. </b>
              </i>
              <br />
              <br />
              My areas of interest include developing full-stack&nbsp;
              <i>
                <b className="purple">Web Applications, AI-integrated Interfaces</b>, and exploring{" "}
                <b className="purple">Cloud & DevOps solutions</b>.
              </i>
              <br />
              <br />
              I enjoy building scalable products with <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> modern frontend frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Flutter (for cross-platform apps)</b>
              </i>.
              <br />
              <br />
              Recently, I’ve also been working with <b className="purple">Firebase, Gemini API, MongoDB</b> and deploying apps via <b className="purple">Netlify and Vercel</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={heroGif} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Aditya-Karmalkar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditya-karmalkar-242274262/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
