import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import content from "../content/ContactPageContent.json"

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", honeypot: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.honeypot) return; // Prevent bot submissions
    // Simulate sending email
    console.log("Email sent to default@example.com:", form);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        {content.linksTitle}
      </Typography>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {content.gitHub}
        <a href="https://github.com/aidenharrington" target="_blank" rel="noopener noreferrer">
          <GitHubIcon sx={{ fontSize: 40, color: '#333' }} />
        </a>
      </Typography>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {content.linkedIn}
        <a href="https://www.linkedin.com/in/aidenharrington/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon sx={{ fontSize: 40, color: '#0077B5' }} />
        </a>
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        {content.contactMeTitle}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label={content.nameFormPlaceholder}
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label={content.emailFormPlaceholder}
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label={content.subjectFormPlaceholder}
          name="subject"
          value={form.subject}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label={content.messageFormPlaceholder}
          name="message"
          multiline
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
        {/* Honeypot field */}
        <TextField
          type="text"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          sx={{ display: "none" }}
        />
        <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
          {content.submitButtonText}
        </Button>
      </form>
    </Box>
  );
};

export default ContactPage;
