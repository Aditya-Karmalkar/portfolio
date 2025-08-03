// Email Service for Contact Form
// Uses Gmail SMTP with App Password

const EMAIL_CONFIG = {
  service: 'gmail',
  user: 'adityanv.karmalkar@gmail.com',
  pass: 'gjxy rurc htmg tigu', // App password provided by user
  to: 'adityanv.karmalkar@gmail.com' // Send to your own email
};

// EmailJS configuration (recommended for frontend)
const emailjsConfig = {
  serviceID: 'service_gmail',
  templateID: 'template_contact',
  publicKey: 'YOUR_PUBLIC_KEY_HERE' // You'll need to set this up
};

// Function to send email using EmailJS (client-side)
export const sendEmail = async (formData) => {
  try {
    // Using EmailJS for client-side email sending
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: EMAIL_CONFIG.to,
      reply_to: formData.email
    };

    // This would require EmailJS setup
    // For now, we'll use a simple fetch to a backend endpoint
    
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: emailjsConfig.serviceID,
        template_id: emailjsConfig.templateID,
        user_id: emailjsConfig.publicKey,
        template_params: templateParams
      })
    });

    return await response.json();
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

// Alternative: Backend endpoint (recommended)
export const sendEmailViaBackend = async (formData) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to: EMAIL_CONFIG.to,
        subject: `Contact Form - ${formData.name}`
      })
    });

    const result = await response.json();
    
    if (response.ok) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      throw new Error(result.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};

// Simple mailto fallback for immediate functionality
export const openMailClient = (formData) => {
  const subject = encodeURIComponent(`Contact Form - ${formData.name}`);
  const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
  
  window.location.href = `mailto:${EMAIL_CONFIG.to}?subject=${subject}&body=${body}`;
};

// Form validation
export const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is invalid';
  }
  
  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  }
  
  return errors;
};
