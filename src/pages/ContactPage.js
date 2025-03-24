import React, { useState } from "react";
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify';
import content from "../content/ContactPageContent.json";
import commonContent from "../content/CommonContent.json"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState('');

  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.honeypot) return; // Prevent bot submissions
    setStatus('Sending...');

    const emailJsKey=process.env.REACT_APP_EMAILJS_KEY
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const autoReplyTemplate = process.env.REACT_APP_AUTO_REPLY_TEMPLATE;
    const userEmailTemplate = process.env.REACT_APP_USER_EMAIL_TEMPLATE;

    console.log(autoReplyTemplate)

    try {
      const autoReplyParams = {
        name: DOMPurify.sanitize(form.name),
        email: DOMPurify.sanitize(form.email),
        subject: DOMPurify.sanitize(form.subject)
      };

      console.log("Sending auto reply email...")
      emailjs.init(emailJsKey)
      await emailjs.send(serviceId, autoReplyTemplate, autoReplyParams);

      const userEmailParams = {
        name: DOMPurify.sanitize(form.name),
        email: DOMPurify.sanitize(form.email),
        subject: DOMPurify.sanitize(form.subject),
        message: DOMPurify.sanitize(form.message)
      };

      console.log("Sending user email...")
      await emailjs.send(serviceId, userEmailTemplate, userEmailParams);

      setStatus('Message sent successfully!');
    } catch (error) {
      setStatus('Failed to send message. Please try again later.')
      // Todo: remove
      console.error('Email send error:', error);
    }
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4">{content.linksTitle}</h4>
      <div className="mb-3 d-flex align-items-center gap-3">
        <span>{content.gitHub}</span>
        <a href={commonContent.gitHubLink} target="_blank" rel="noopener noreferrer" className="text-dark">
          <i className="bi bi-github" style={{ fontSize: "40px" }}></i>
        </a>
      </div>
      <div className="mb-3 d-flex align-items-center gap-3">
        <span>{content.linkedIn}</span>
        <a
          href={commonContent.linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          <i className="bi bi-linkedin" style={{ fontSize: "40px" }}></i>
        </a>
      </div>
      <h4 className="mb-4 mt-5">{content.contactMeTitle}</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            {content.nameFormPlaceholder}
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            {content.emailFormPlaceholder}
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            {content.subjectFormPlaceholder}
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            {content.messageFormPlaceholder}
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* Honeypot field */}
        <input
          type="text"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <button type="submit" className="btn btn-primary mt-3">
          {content.submitButtonText}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
