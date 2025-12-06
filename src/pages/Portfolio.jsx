import React, { useState } from "react";
import { portfolioFilters, projects } from "../data/portfolioData.js";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* filter list (desktop) */}
        <ul className="filter-list">
          {portfolioFilters.map((filter) => (
            <li className="filter-item" key={filter}>
              <button
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        {/* select (mobile) - simple hack: same activeFilter state */}
        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value">
              {activeFilter === "All" ? "Select category" : activeFilter}
            </div>

            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {portfolioFilters.map((filter) => (
              <li className="select-item" key={filter}>
                <button
                  data-select-item
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* projects grid */}
        <ul className="project-list">
          {projects.map((project) => {
            const isActive =
              activeFilter === "All" || project.category === activeFilter;
            return (
              <li
                key={project.id}
                className={`project-item ${isActive ? "active" : ""}`}
                data-filter-item
                data-category={project.category.toLowerCase()}
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Portfolio;
