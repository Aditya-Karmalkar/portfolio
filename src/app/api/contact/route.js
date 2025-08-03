import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'adityanv.karmalkar@gmail.com',
    pass: 'gjxy rurc htmg tigu',
  },
});

// Verify transporter connection
transporter.verify(function(error, success) {
  if (error) {
    console.log('Transporter verification error:', error);
  } else {
    console.log('Transporter is ready to send messages');
  }
});

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #6c63ff;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #6c63ff; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Send email helper function
async function sendEmail(payload) {
  const { name, email, message: userMessage } = payload;

  const mailOptions = {
    from: '"Portfolio Contact" <adityanv.karmalkar@gmail.com>',
    to: 'adityanv.karmalkar@gmail.com',
    subject: `New Message From ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${userMessage}`,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  try {
    console.log('Attempting to send email with config:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });
    
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Detailed email sending error:', {
      message: error.message,
      code: error.code,
      response: error.response,
      stack: error.stack
    });
    return { success: false, error: error.message };
  }
}

// POST request handler
export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    // Validate input
    if (!name || !email || !userMessage) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Send email
    const emailResult = await sendEmail(payload);

    if (emailResult.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Email sent successfully!',
          messageId: emailResult.messageId
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: `Failed to send email: ${emailResult.error}`
      },
      { status: 500 }
    );
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json(
      { success: false, message: 'Server error occurred.' },
      { status: 500 }
    );
  }
}

// GET endpoint for testing email configuration
export async function GET() {
  try {
    // Test transporter connection
    await transporter.verify();
    return NextResponse.json({
      success: true,
      message: 'Email service is configured correctly',
      config: {
        service: 'gmail',
        user: 'adityanv.karmalkar@gmail.com',
        // Don't expose the password in response
        authenticated: true
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Email service configuration error',
      error: error.message
    }, { status: 500 });
  }
}
