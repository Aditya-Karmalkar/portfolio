import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const ContactEmailJS = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResponseMessage('');

    try {
      // EmailJS configuration - update these with your actual EmailJS credentials
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_123456789';
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_123456789';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'user_123456789';

      emailjs.init(publicKey);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'adityanv.karmalkar@gmail.com',
        reply_to: formData.email,
        subject: `New message from ${formData.name} via Portfolio`
      };

      const response = await emailjs.send(serviceID, templateID, templateParams);
      
      setResponseMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      console.log('Email sent:', response);
    } catch (error) {
      setResponseMessage('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="form-textarea"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isSending}
          className="submit-btn"
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
        
        {responseMessage && (
          <div className={`response-message ${responseMessage.includes('success') ? 'success' : 'error'}`}>
            {responseMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactEmailJS;
