import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPhp } from "react-icons/fa";
import { DiJavascript1, DiNodejs, DiPython, DiGit, DiJava, DiHtml5, DiCss3, DiMysql } from "react-icons/di";
import { SiReact, SiFlutter, SiTensorflow, SiNumpy, SiWordpress, SiShopify, SiFigma, SiCanva } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
        <span className="tech-tooltip">PHP</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <span className="tech-tooltip">JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <span className="tech-tooltip">Python</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <span className="tech-tooltip">Java</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <span className="tech-tooltip">MySQL</span>
      </Col>

      {/* Web Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span className="tech-tooltip">Node.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <span className="tech-tooltip">React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <span className="tech-tooltip">Flutter</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <span className="tech-tooltip">HTML5</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <span className="tech-tooltip">CSS3</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <span className="tech-tooltip">TensorFlow</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <span className="tech-tooltip">NumPy</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
        <span className="tech-tooltip">WordPress</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShopify />
        <span className="tech-tooltip">Shopify</span>
      </Col>

      {/* Frameworks & Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <span className="tech-tooltip">React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <span className="tech-tooltip">Node.js</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <span className="tech-tooltip">Flutter</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <span className="tech-tooltip">TensorFlow</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <span className="tech-tooltip">NumPy</span>
      </Col>

      {/* Tools & Platforms */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <span className="tech-tooltip">Git</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscGithub />
        <span className="tech-tooltip">GitHub</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShopify />
        <span className="tech-tooltip">Shopify</span>
      </Col>

      {/* Design Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <span className="tech-tooltip">Figma</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
        <span className="tech-tooltip">Canva</span>
      </Col>
    </Row>
  );
}

export default Techstack;
