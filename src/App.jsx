// src/App.jsx
import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  const [activePage, setActivePage] = useState("about");

  return (
    <main>
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="main-content">
        {/* NAVBAR */}
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {/* PAGES */}
        <article
          className={`about ${activePage === "about" ? "active" : ""}`}
          data-page="about"
        >
          <About />
        </article>

        <article
          className={`resume ${activePage === "resume" ? "active" : ""}`}
          data-page="resume"
        >
          <Resume />
        </article>

        <article
          className={`portfolio ${activePage === "portfolio" ? "active" : ""}`}
          data-page="portfolio"
        >
          <Portfolio />
        </article>

        <article
          className={`blog ${activePage === "blog" ? "active" : ""}`}
          data-page="blog"
        >
          <Blog />
        </article>

        <article
          className={`contact ${activePage === "contact" ? "active" : ""}`}
          data-page="contact"
        >
          <Contact />
        </article>
      </div>
    </main>
  );
};

export default App;
