import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import "./ProjectsEnhanced.css";
import raktdaanImage from "../../Assets/Projects/raktdaan.png";
import bhashapathImage from "../../Assets/Projects/bhashapath.png";
import scrapyGeminiImage from "../../Assets/Projects/scrapy_gemini.png";
import aiChatbotImage from "../../Assets/Projects/ai_chatbot.png";
import cipherToolImage from "../../Assets/Projects/cipher_tool.png";
import curamindImage from "../../Assets/Projects/curamind.png";

function Projects() {
  const projects = [
    {
      title: "RAKTDAAN",
      description: "A blood donation platform built using TypeScript. Helps users register as donors, search nearby blood banks, and manage requests. Aimed at improving emergency response for blood needs.",
      image: raktdaanImage,
      ghLink: "https://github.com/Aditya-Karmalkar/RAKTDAAN",
      demoLink: "https://raktdaanorg.netlify.app/",
      isBlog: false
    },
    {
      title: "BhashaPath",
      description: "A multilingual learning tool built in TypeScript. Assists users in translating words, learning sentence structures, and exploring multiple Indian languages.",
      image: bhashapathImage,
      ghLink: "https://github.com/Aditya-Karmalkar/BhashaPath",
      isBlog: false
    },
    {
      title: "Scrapy Gemini Web Summarizer",
      description: "Flask-based app that scrapes web content and summarizes it using Gemini 1.5 Flash. Includes keyword extraction, word/character limits, and supports multilingual summaries.",
      image: scrapyGeminiImage,
      ghLink: "https://github.com/Aditya-Karmalkar/Scrapy-Gemini-Web-Summarizer",
      isBlog: false
    },
    {
      title: "AI Chatbot - Flutter + Gemini API",
      description: "Flutter chatbot using Gemini 2.0 Flash. Features rich UI, secure API integration, markdown support, chat history persistence, and smooth UX on mobile.",
      image: aiChatbotImage,
      ghLink: "https://github.com/Aditya-Karmalkar/AI-Chatbot-Flutter-Gemini-API",
      isBlog: false
    },
    {
      title: "Ciphery - Caesar Cipher Tool",
      description: "Interactive Caesar Cipher web app built in JavaScript. Supports encryption/decryption with case and character preservation. Ideal for learners and cryptography demos.",
      image: cipherToolImage,
      ghLink: "https://github.com/Aditya-Karmalkar/Ciphery-Caesar-Cipher-Web-Tool",
      isBlog: false
    },
    {
      title: "Curamind - Mental Health Assistant",
      description: "AI-powered health assistant that helps users manage medications, appointments, and track mental well-being. Built using React, OpenAI APIs, and Firebase. Features secure login and user insights.",
      image: curamindImage,
      ghLink: "https://github.com/Aditya-Karmalkar/",
      isBlog: false
    }
  ];

  return (
    <div className="project-section">
      <Particle />
      <Container className="project-container">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card-wrapper fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="project-card-enhanced"
              >
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image-enhanced"
                  />
                  <div className="project-overlay">
                    <div className="project-overlay-content">
                      <h4 className="project-overlay-title">{project.title}</h4>
                      <p className="project-overlay-description">
                        {project.description.substring(0, 100)}...
                      </p>
                      <div className="project-overlay-buttons">
                        <a
                          href={project.ghLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-overlay-btn"
                        >
                          <i className="fab fa-github" /> GitHub
                        </a>
                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-overlay-btn demo-btn"
                          >
                            <i className="fas fa-external-link-alt" /> Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-content-enhanced">
                  <h3 className="project-title-enhanced">{project.title}</h3>
                  <p className="project-description-enhanced">{project.description}</p>
                  <div className="project-links-enhanced">
                    <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github" />
                    </a>
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt" />
                      </a>
                    )}
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
