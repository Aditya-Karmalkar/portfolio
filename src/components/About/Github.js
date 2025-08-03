import React from "react";
import { Row, Col } from "react-bootstrap";

function Github() {
  const experiences = [
    {
      id: 1,
      title: "Intern",
      company: "Soluxction Space LLP",
      duration: "Jan 2025 - March 2025",
      description: "Working as an intern contributing to web development projects and gaining hands-on experience with modern technologies and industry practices."
    },
    {
      id: 2,
      title: "Intern",
      company: "BLU DOLLPPHN",
      duration: "2023 - Present",
      description: "Serving as an intern focusing on software development and technical solutions, building practical skills in a professional environment."
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Experience</strong>
      </h1>

      <Row style={{ justifyContent: "center", padding: "20px" }}>
        {experiences.map((exp) => (
          <Col md={4} key={exp.id} className="experience-card">
            <div style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "25px",
              borderRadius: "15px",
              margin: "10px",
              border: "1px solid rgba(205, 95, 248, 0.3)",
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}>
              <h4 style={{ color: "#cd5ff8", marginBottom: "10px" }}>
                {exp.title}
              </h4>
              <p style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "14px",
                marginBottom: "5px"
              }}>
                {exp.company}
              </p>
              <p style={{
                color: "#16f2b3",
                fontSize: "13px",
                marginBottom: "15px"
              }}>
                {exp.duration}
              </p>
              <p style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "14px",
                lineHeight: "1.4",
                flexGrow: 1
              }}>
                {exp.description}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Row>
  );
}

export default Github;
