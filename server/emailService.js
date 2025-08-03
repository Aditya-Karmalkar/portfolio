const { Resend } = require('resend');
require('dotenv').config();

// HTML email template
const generateEmailTemplate = (name, email, message) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #6c63ff;">New Message From Portfolio Contact Form</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #6c63ff; padding-left: 10px; margin-left: 0;">
        ${message}
      </blockquote>
      <p style="font-size: 12px; color: #888;">This message was sent from your portfolio contact form.</p>
    </div>
  </div>
`;

async function sendEmail({ name, email, message }) {
    try {
        console.log('Initializing Resend client...');
        
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        console.log('Sending email via Resend...');

        const { data, error } = await resend.emails.send({
            from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
            to: [process.env.TO_EMAIL || process.env.FROM_EMAIL],
            replyTo: email,
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: generateEmailTemplate(name, email, message)
        });

        if (error) {
            console.error('Resend API error:', error);
            throw new Error(error.message);
        }

        console.log('Email sent successfully:', data);
        return { success: true, messageId: data.id };
    } catch (error) {
        console.error('Email sending failed:', {
            error: error.message,
            stack: error.stack
        });
        throw new Error(`Failed to send email: ${error.message}`);
    }
}

module.exports = { sendEmail };
