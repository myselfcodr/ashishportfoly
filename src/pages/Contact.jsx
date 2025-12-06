import React, { useState } from "react";
import { contactInfo, mapEmbedSrc } from "../data/contactData.js";

const Contact = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const allFilled =
    form.fullname.trim() && form.email.trim() && form.message.trim();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!allFilled) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullname,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus({ type: "success", message: data.message });
      setForm({ fullname: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src={mapEmbedSrc}
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" data-form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={form.fullname}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            value={form.message}
            onChange={handleChange}
          ></textarea>

          {status.message && (
            <p
              style={{
                color: status.type === "success" ? "#4ade80" : "#f87171",
                marginBottom: "10px",
                fontSize: "14px",
              }}
            >
              {status.message}
            </p>
          )}

          <button
            className="form-btn"
            type="submit"
            disabled={!allFilled || loading}
            data-form-btn
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{loading ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
