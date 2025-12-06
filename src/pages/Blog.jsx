import React from "react";
import { blog } from "../data/blogData.js";

const Blog = () => {
  return (
    <>
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blog.map((post) => (
            <li className="blog-post-item" key={post.id}>
              <a href="#">
                <figure className="blog-banner-box">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{post.category}</p>

                    <span className="dot"></span>

                    <time>{post.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">{post.title}</h3>

                  <p className="blog-text">{post.excerpt}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Blog;
