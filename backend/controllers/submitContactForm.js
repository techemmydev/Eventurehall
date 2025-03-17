// Handle form submission

import { Contact } from "../models/ContactSchema.js";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message, checkbox, clientPhone } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Save to database
    const contactEntry = new Contact({
      name,
      email,
      message,
      checkbox,
      clientPhone,
    });
    await contactEntry.save();

    // ✅ Send data to Web3Forms
    const formData = {
      access_key: process.env.VITE_API_WEB3FORM, // Ensure this is in your `.env` file
      email: "eventhallfscs@gmail.com",
      replyto: email,
      subject: "📩 New Contact Form Submission!",
      message: `📝 Name: ${name}\n✉ Email: ${email}\n📞 Contact: ${clientPhone}\n📩 Message: ${message}`,
    };

    const web3Response = await axios.post(
      "https://api.web3forms.com/submit",
      formData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (web3Response.data.success) {
      return res.status(201).json({ message: "Form submitted successfully!" });
    } else {
      return res.status(500).json({ error: "Web3Forms submission failed" });
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: error.message || "Server error" });
  }
};
