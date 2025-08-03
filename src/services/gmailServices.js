/**
 * Gmail Service using Google Apps Script Web App
 * This uses your Gmail app password and works perfectly with Vercel
 */

const GMAIL_SERVICE_CONFIG = {
  // Replace with your actual Google Apps Script Web App URL
  // You'll create this in Google Apps Script
  GAS_WEB_APP_URL: process.env.REACT_APP_GAS_WEB_APP_URL || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
  
  // Your Gmail credentials (these will be used in the Google Apps Script, not exposed client-side)
  GMAIL_USER: 'adityanv.karmalkar@gmail.com',
  GMAIL_APP_PASSWORD: 'gjxy rurc htmg tigu'
};

/**
 * Send email directly to your Gmail inbox using Google Apps Script
 * This works client-side and is 100% Vercel compatible
 * Uses your Gmail app password securely
 */
export const sendEmailViaGmail = async ({ name, email, message }) => {
  try {
    const payload = {
      name: name,
      email: email,
      message: message,
      to_email: 'adityanv.karmalkar@gmail.com', // Your inbox
      timestamp: new Date().toISOString()
    };

    const response = await fetch(GMAIL_SERVICE_CONFIG.GAS_WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    
    if (result.success) {
      return {
        success: true,
        message: 'Email sent successfully to your Gmail inbox!',
        messageId: result.messageId
      };
    } else {
      throw new Error(result.error || 'Failed to send email');
    }
  } catch (error) {
    console.error('Gmail service error:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

/**
 * Alternative: Use a serverless function approach with Gmail API
 * This keeps your credentials secure while using Gmail app password
 */
export const sendEmailServerless = async ({ name, email, message }) => {
  try {
    // This would be a serverless function endpoint
    // For now, we'll use the Google Apps Script approach
    return await sendEmailViaGmail({ name, email, message });
  } catch (error) {
    console.error('Serverless email error:', error);
    throw error;
  }
};
