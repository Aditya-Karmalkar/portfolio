import emailjs from 'emailjs-com';

// EmailJS configuration - these will be set in your environment variables
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_123456789';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_123456789';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'user_123456789';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Send email directly to inbox using EmailJS
 * This works client-side and is perfect for Vercel deployments
 * @param {Object} emailData - Contains name, email, and message
 * @returns {Promise} - EmailJS send promise
 */
export const sendEmailDirect = async ({ name, email, message }) => {
  try {
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'adityanv.karmalkar@gmail.com', // Your direct inbox
      reply_to: email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return {
      success: true,
      message: 'Email sent successfully!',
      data: response
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw new Error(`Failed to send email: ${error.text || error.message}`);
  }
};

/**
 * Alternative method using EmailJS with more detailed configuration
 */
export const sendEmailAdvanced = async ({ name, email, message }) => {
  try {
    const serviceID = EMAILJS_SERVICE_ID;
    const templateID = EMAILJS_TEMPLATE_ID;
    
    const templateParams = {
      to_name: 'Aditya',
      from_name: name,
      from_email: email,
      message: message,
      subject: `New message from ${name} via Portfolio`,
      reply_to: email,
    };

    const response = await emailjs.send(serviceID, templateID, templateParams);
    
    return {
      success: true,
      messageId: response.text,
      message: 'Email sent successfully to your inbox!'
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error(`Email sending failed: ${error.text || error.message}`);
  }
};
