import React from "react";
import {
  aboutText,
  services,
  testimonials,
  clients,
} from "../data/aboutData.js";

const About = () => {
  return (
    <>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        {aboutText.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      {/* service */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {services.map((service, idx) => (
            <li className="service-item" key={idx}>
              <div className="service-icon-box">
                <ion-icon name={service.icon}></ion-icon>
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>

                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* testimonials */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((item, idx) => (
            <li className="testimonials-item" key={idx}>
              <div className="content-card">
                <figure className="testimonials-avatar-box">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    width="60"
                  />
                </figure>

                <h4 className="h4 testimonials-item-title">{item.name}</h4>

                <div className="testimonials-text">
                  <p>{item.message}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* clients */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {clients.map((client, idx) => (
            <li className="clients-item" key={idx}>
              <a href="#">
                <img src={client.logo} alt="client logo" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default About;
