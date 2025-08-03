import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import { Fade } from "react-reveal";
import "./certificates.css";
import AWS from "../../Assets/AWS Certificate.png";
import NVIDIA from "../../Assets/nvidia.png";
import IBM from "../../Assets/IBM.png";
import AWSBadge from "../../Assets/aws-re-start-graduate.png";
import Cisco from "../../Assets/cisconetwork.png";
import CiscoSecurity from "../../Assets/ciscosecurity.png";
import oracleai from "../../Assets/oracleai.png";
import oraclecloud from "../../Assets/oraclecloud.png";
import ciscopython from "../../Assets/ciscopython.png";
// import AWS from "../../Assets/AWS Certificate.png";
// import AWS from "../../Assets/AWS Certificate.png";
// import AWS from "../../Assets/AWS Certificate.png";
// import AWS from "../../Assets/AWS Certificate.png";
// import AWS from "../../Assets/AWS Certificate.png";
// import AWS from "../../Assets/AWS Certificate.png";
// import AWS from "../../Assets/AWS Certificate.png";
// import AWS from "../../Assets/AWS Certificate.png";

function Certificates() {
    const certificates = [
        {
            title: "AWS Certified Cloud Practitioner",
            organization: "AWS",
            date: "2024",
            description: "Credential earned for foundational AWS cloud knowledge and skills.",
            image: AWS,
            link: "https://drive.google.com/drive/folders/1_le8WqUz5dNFQU_pMf5B_H8EXsd6s5AM"
        },
        {
            title: "Building LLM Applications With Prompt Engineering",
            organization: "NVIDIA",
            date: "2024",
            description: "Completed hands-on training on building LLM apps using prompt engineering.",
            image: NVIDIA,
            link: "https://drive.google.com/drive/folders/1_le8WqUz5dNFQU_pMf5B_H8EXsd6s5AM"
        },
        {
            title: "Getting Started with Artificial Intelligence",
            organization: "IBM SkillsBuild",
            date: "2024",
            description: "Gained foundational knowledge in AI concepts and applications.",
            image: IBM,
            link: "https://drive.google.com/drive/folders/1_le8WqUz5dNFQU_pMf5B_H8EXsd6s5AM"
        },
        {
            title: "AWS re/Start Graduate Badge",
            organization: "AWS",
            date: "2024",
            description: "Successfully completed AWS re/Start cloud computing program.",
            image: AWSBadge,
            link: "https://www.credly.com/badges/23897348-9302-42e4-9db7-ecc06fd74ef9/public_url"
        },
        {
            title: "Cisco Network Technician Career Path",
            organization: "Cisco",
            date: "2024",
            description: "Completed comprehensive networking fundamentals and hands-on labs.",
            image: Cisco,
            link: "https://drive.google.com/drive/folders/1_le8WqUz5dNFQU_pMf5B_H8EXsd6s5AM"
        },
        {
            title: "Cisco Network Support and Security",
            organization: "Cisco",
            date: "2024",
            description: "Advanced networking concepts with security implementation.",
            image: CiscoSecurity,
            link: "https://drive.google.com/drive/folders/1_le8WqUz5dNFQU_pMf5B_H8EXsd6s5AM"
        },
        {
            title: "Oracle Cloud Infrastructure Certified AI Foundations Associate",
            organization: "Oracle",
            date: "2024",
            description: "Gained expertise in Oracle Cloud AI services and implementations.",
            image: oracleai,
            link: "https://drive.google.com/drive/folders/1_le8WqUz5dNFQU_pMf5B_H8EXsd6s5AM"
        },
        {
            title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
            organization: "Oracle",
            date: "July 18, 2025",
            description: "Comprehensive certification validating foundational knowledge of Oracle Cloud Infrastructure services and solutions.",
            image: oraclecloud,
            link: "https://drive.google.com/drive/folders/1_le8WqUz5dNFQU_pMf5B_H8EXsd6s5AM"
        },
        {
            title: "Cisco Python Essentials 1",
            organization: "Cisco",
            date: "2024",
            description: "Mastered Python fundamentals for network automation and development.",
            image: ciscopython,
            link: "https://www.credly.com/badges/59f27db2-2648-4118-956f-06e647843658/public_url"
        },
    ];

    return (
        <div className="certificates-section">
            <Particle />
            <Container className="certificates-container">
                <div className="certificates-heading">
                    <h1>
                        My <strong style={{ color: '#cd5ff8' }}>Certifications</strong>
                    </h1>
                </div>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <Tilt
                            key={index}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            className="certificate-card"
                        >
                            <div className="certificate-image-container">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="certificate-image"
                                />
                                <div className="certificate-overlay">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="certificate-button"
                                    >
                                        View Certificate
                                    </a>
                                </div>
                            </div>
                            <div className="certificate-content">
                                <h3 className="certificate-title">{cert.title}</h3>
                                <p className="certificate-organization">{cert.organization}</p>
                                <p className="certificate-date">{cert.date}</p>
                                <p className="certificate-description">{cert.description}</p>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Certificates;