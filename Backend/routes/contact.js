



const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '2021pietcsanjali022@poornima.org', // Replace with your email address
        pass: 'enua lauf pued pzkv' // Replace with your email password
    }
});

// Handle form submission
router.post('/submit-form', async (req, res) => {
    const { name, email, message } = req.body;
    console.log("Form data received:", { name, email, message });

    try {
        // Save form data to the database
        const contact = new Contact({ name, email, message });
        await contact.save();
        console.log("Form data saved to database");

        // Send email notification to you from the submitter's email address
        const mailOptions = {
            from: email, // Send email from the submitter's email address
            to: '2021pietcsanjali022@poornima.org', // Your email address
            subject: `Portfolio msg from ${name}`, // Customize subject with submitter's name
            text: `You have received a new message from ${name} (${email}):\n\n${message}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).send({ message: 'Error submitting form' });
            }
            console.log('Email sent:', info.response);
            res.send({ message: 'Form submitted successfully!' });
        });
    } catch (error) {
        console.error("Error processing form submission:", error);
        res.status(500).send({ message: 'Server error' });
    }
});

module.exports = router;
