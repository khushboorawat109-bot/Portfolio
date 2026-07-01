import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:4173'] }));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio backend is running.' });
});

app.get('/api/contact', (req, res) => {
  res.json({
    success: true,
    message: 'Contact form endpoint is ready. Please submit the form using POST.'
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic server-side validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    // Create transporter
    // For production: replace with real SMTP credentials in .env
    // For development: uses Ethereal test email service
    let transporter;

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      // Real SMTP (Gmail example)
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // Use App Password, not real password
        },
      });
    } else {
      // Ethereal test account (for development/demo)
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER || 'noreply@portfolio.com'}>`,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER || 'khushboo.rawat@example.com',
      replyTo: email,
      subject: `[Portfolio] ${subject} - from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb;">
          <h2 style="color: #3b82f6; margin-bottom: 20px;">📬 New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; width: 30%;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #3b82f6;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Subject</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #111827;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">Message:</p>
            <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af; text-align: center;">Sent from Khushboo Rawat's Portfolio Website</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    // Log preview URL for Ethereal test emails
    if (!process.env.EMAIL_USER) {
      console.log('📧 Test email preview URL:', nodemailer.getTestMessageUrl(info));
    }

    res.json({ 
      success: true, 
      message: "Thank you! Your message has been sent. I'll get back to you soon.",
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again or contact me directly.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend running at http://localhost:${PORT}`);
  console.log(`📬 Contact API: http://localhost:${PORT}/api/contact`);
});
