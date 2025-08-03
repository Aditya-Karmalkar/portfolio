import React, { useState } from 'react';
import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import contact from "../../Assets/contact.png";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            setSubmitMessage('Please fill in all fields.');
            setIsSubmitting(false);
            return;
        }

        // Email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitMessage('Please provide a valid email address.');
            setIsSubmitting(false);
            return;
        }

        try {
            // Send email via Express server using Gmail passkey
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitMessage('Message sent successfully! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitMessage(`Error: ${result.message || 'Failed to send message'}`);
            }

            // Clear message after 5 seconds
            setTimeout(() => setSubmitMessage(''), 5000);

        } catch (error) {
            console.error('Email sending failed:', error);
            const errorMessage = error.message || 'Unable to send email';
            setSubmitMessage(`Error: ${errorMessage}. Please try again.`);

            // Clear message after 5 seconds
            setTimeout(() => setSubmitMessage(''), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className="contact-section" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <Particle />
                </div>
                <div className="contact-container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="contact-grid">
                        <div className="contact-form-card">
                            <div className="contact-form-content">
                                <div className="contact-illustration">
                                    <img src={contact} alt="Contact" className="contact-image" style={{ width: '10%', height: '10' }} />
                                </div>
                                <h2 className="contact-form-title">
                                    Send a Message
                                </h2>
                                <p className="contact-form-description">
                                    Feel free to reach out with any questions or opportunities. I'm always open to new opportunities and collaborations.
                                </p>

                                <div className="contact-info-item"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        ':hover': {
                                            backgroundColor: 'rgba(108, 99, 255, 0.1)',
                                            transform: 'translateX(5px)'
                                        }
                                    }}>
                                    <div className="contact-icon" style={{ marginRight: '10px' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            style={{
                                                transition: 'all 0.3s ease',
                                                ':hover': {
                                                    transform: 'scale(1.1)'
                                                }
                                            }}>
                                            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"
                                                fill="#6c63ff"
                                                style={{
                                                    transition: 'fill 0.3s ease',
                                                    ':hover': {
                                                        fill: '#8a85ff'
                                                    }
                                                }}
                                            />
                                        </svg>
                                    </div>
                                    <div className="contact-text" style={{
                                        color: 'white',
                                        transition: 'all 0.3s ease',
                                        ':hover': {
                                            color: '#6c63ff',
                                            fontWeight: '500'
                                        }
                                    }}>Pune, Maharashtra, India </div>
                                </div>

                                <div className="contact-info-item"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '15px',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        ':hover': {
                                            backgroundColor: 'rgba(108, 99, 255, 0.1)',
                                            transform: 'translateX(5px)'
                                        }
                                    }}>
                                    <div className="contact-icon" style={{ marginRight: '10px' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            style={{
                                                transition: 'all 0.3s ease',
                                                ':hover': {
                                                    transform: 'scale(1.1)'
                                                }
                                            }}>
                                            <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 14L4 8V6L12 12L20 6V8Z"
                                                fill="#6c63ff"
                                                style={{
                                                    transition: 'fill 0.3s ease',
                                                    ':hover': {
                                                        fill: '#8a85ff'
                                                    }
                                                }}
                                            />
                                        </svg>
                                    </div>
                                    <div className="contact-text" style={{
                                        color: 'white',
                                        transition: 'all 0.3s ease',
                                        ':hover': {
                                            color: 'purple',
                                            fontWeight: '500'
                                        }
                                    }}>adityanv.karmalkar@gmail.com</div>
                                </div>

                                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="contact-input"
                                        required
                                        style={{
                                            width: '100%',
                                            height: '50px',
                                            padding: '12px 16px',
                                            fontSize: '16px',
                                            backgroundColor: '#1a1a1a',
                                            color: '#fff',
                                            border: '1px solid #444',
                                            borderRadius: '8px',
                                            marginBottom: '16px'
                                        }}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="contact-input"
                                        required
                                        style={{
                                            width: '100%',
                                            height: '50px',
                                            padding: '12px 16px',
                                            fontSize: '16px',
                                            backgroundColor: '#1a1a1a',
                                            color: '#fff',
                                            border: '1px solid #444',
                                            borderRadius: '8px',
                                            marginBottom: '16px'
                                        }}
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="contact-textarea"
                                        required
                                        style={{
                                            width: '100%',
                                            height: '150px',
                                            padding: '12px 16px',
                                            fontSize: '16px',
                                            backgroundColor: '#1a1a1a',
                                            color: '#fff',
                                            border: '1px solid #444',
                                            borderRadius: '8px',
                                            marginBottom: '16px',
                                            resize: 'none'
                                        }}
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="contact-submit"
                                        disabled={isSubmitting}
                                        style={{
                                            backgroundColor: '#6c63ff',
                                            color: '#fff',
                                            padding: '12px 24px',
                                            fontSize: '16px',
                                            border: 'none',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            transition: 'background-color 0.3s ease',
                                            opacity: isSubmitting ? '0.7' : '1'
                                        }}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send'}
                                    </button>
                                    {submitMessage && (
                                        <div style={{
                                            marginTop: '10px',
                                            padding: '10px',
                                            borderRadius: '4px',
                                            backgroundColor: submitMessage.includes('Error') ? '#ff4444' : '#44ff44',
                                            color: '#fff',
                                            textAlign: 'center'
                                        }}>
                                            {submitMessage}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
