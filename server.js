const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Server setup
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));

// Configure Nodemailer transport
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'siddartha11.nani@gmail.com',
    pass: 'bunnynani',
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log('Error verifying transporter:', error);
  } else {
    console.log('Ready to Send');
  }
});

// Contact route
router.post('/contact', (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER, // Use the email from environment variables
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ code: 500, status: 'Message Failed', error });
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});
