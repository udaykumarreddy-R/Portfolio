import React from "react";
import "./Review.css";
import img1 from "../Assets/1m.webp";
import img2 from "../Assets/1f.webp";
import img3 from "../Assets/2m.webp";
import img4 from "../Assets/3f.webp";
import img5 from "../Assets/3m.webp";
import img6 from "../Assets/4f.webp";
const reviews = [
 {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    img : img1,
    rating: 4,
    text: "Working with this platform has been an incredible experience. The tools are user-friendly, and the support team is always ready to help. I learned new skills and improved my project efficiency tremendously."
  },
  {
    name: "Priya Nair",
    role: "Software Engineer",
    img : img2,
    rating: 3.5,
    text: "The software is fast, secure, and reliable. The continuous updates show the dedication of the team to keeping the product top-notch. I’m excited to see what comes next."
  },
  {
    name: "Rohit Mehta",
    role: "Backend Developer",
    img : img3,
    rating: 3.2,
    text: "API performance is decent,The backend integration features are robust and flexible. Although there’s room for improvement in API documentation, the overall system is reliable and scalable for large projects."
  },
  {
    name: "Sneha Kapoor",
    role: "Python Developer",
    img : img4,
    rating: 4.6,
    text: "End-to-end development was seamless. The integration between frontend and backend services was smooth and well-structured. The software is fast, secure, and reliable"
  },
  {
    name: "Karan Verma",
    role: "Full Stack Developer",
    img : img5,
    rating: 5,
    text: "This is the best development environment I’ve worked with. From frontend components to backend APIs, everything integrates smoothly. Highly recommended for serious developers."
  },
  {
    name: "Meera Iyer",
    role: "UI/UX Designer",
    img : img6,
    rating: 3,
    text: "The design tools are intuitive and help create professional layouts quickly. Some advanced customization options could be added, but for most projects, it’s perfect."  }
];

export default function Review() {
  return (
    <section className="review-section">
      <div className="review-header">
        <h2>
          Client <span>Success Stories</span>
        </h2>
        <p>
          I take pride in delivering exceptional results that exceed client expectations.
          Here's what some of my clients have to say about their experience working with me.
        </p>
      </div>

      <div className="review-grid">
        {reviews.map((r, i) => (
          <div
            key={i}
            className={`review-card ${r.highlight ? "highlight" : ""}`}
          >
            <div className="review-header-card">
              <img src={r.img} alt={r.name} className="review-img" />
              <div>
                <h3>{r.name}</h3>
                <p>{r.role}</p>
              </div>
            </div>
            <blockquote>{r.text}</blockquote>
            <div className="review-footer">
              <div className="stars">{"⭐".repeat(r.rating)}</div>
              <span className="verified">✔ Verified Client</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
