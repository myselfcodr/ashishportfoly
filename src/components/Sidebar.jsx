// src/components/Sidebar.jsx
import React, { useState } from "react";
import { profile } from "../data/aboutData.js";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`sidebar ${open ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/images/my-avatar.png" alt={profile.name} width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title={profile.name}>
            {profile.name}
          </h1>

          <p className="title">{profile.jobTitle}</p>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href={`mailto:${profile.email}`} className="contact-link">
                {profile.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href={`tel:${profile.phone}`} className="contact-link">
                {profile.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time>{profile.birthday}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{profile.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="tel:8878822433" className="social-link">
              <ion-icon name="call-outline"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://wa.me/8878822433" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://www.instagram.com/aashee_ss" target="_blank" rel="noopener noreferrer" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
