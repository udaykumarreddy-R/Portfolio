import React, { useState } from "react";
import "./About.css";
import profileImage from "../Assets/ChatGPT Image Jul 20, 2025, 09_47_57 PM.png"; // Replace with your image path
import pythonCert from "../Assets/CS50P.pdf";
import fullstackCert from "../Assets/1-d5dfa252-9d20-4708-90f0-94a36d82afab.pdf";
import javascript from "../Assets/Javascript.pdf"

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

const certificates = [
  { title: "Python Developer Certificate", file: pythonCert },
  { title: "Full Stack Development Certificate", file: fullstackCert },
  { title: "React.js & Django Certificate", file: javascript },
  { title: "Database Management Certificate", url: "https://www.credly.com/go/SVacXw8I" }
];


  return (
    <div className="about-container">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={activeTab === "certificates" ? "active" : ""}
          onClick={() => setActiveTab("certificates")}
        >
          Certificates
        </button>
      </div>

      {/* About Me */}
      {activeTab === "about" && (
        <div className="about-me-section">
          <div className="about-image">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="about-text">
            <h2>ABOUT ME</h2>
            <p>
              I’m a Full Stack Developer who loves turning ideas into fully functional digital products. With Python powering my backend and modern frontend tools like React.js, HTML, CSS, and JavaScript, I create applications that are both beautiful and powerful.
            </p>
            <p>
              My expertise extends to building secure and scalable backends using Django and Flask, as well as crafting responsive and engaging interfaces with React.js and modern styling frameworks. I enjoy designing systems where the frontend and backend work seamlessly together, ensuring smooth data flow through MySQL databases and well-structured APIs.
            </p>
            <p>
              I’m passionate about delivering high-quality applications that are user-friendly, efficient, and maintainable. I approach every project with a problem-solving mindset, always striving to optimize performance and follow best practices. Technology is constantly evolving, and I make it a priority to keep learning, experimenting, and improving my skill set.
            </p>
            <p>
              Outside of coding, I enjoy exploring new tech trends, building personal projects, and finding creative solutions to everyday challenges. For me, software development is more than just a career — it’s a craft that allows me to bring ideas to life and make a real impact.
            </p>
          </div>
        </div>
      )}

      {/* Education & Experience in two columns */}
      {activeTab === "education" && (
        <div className="edu-exp-section">
          {/* Education Column */}
          <div className="column">
            <h2>My Education</h2>
            <div className="timeline">
              <div className="timeline-item">
                <h3>B.TECH In CSE</h3>
                <span className="org">Jawaharlal Nehru University Kakinada</span> | <span>2020 - 2024</span>
                <p>
                    I completed my B.Tech in Computer Science and Engineering from Mandava Institute of Engineering College, where I actively participated in academic projects and college activities. My time at the institution helped me grow both academically and personally, fostering qualities such as discipline, adaptability, and teamwork. This experience played a key role in shaping my professional journey and preparing me for future opportunities.

                </p>
                <strong>Percentage: 7.5 CGPA</strong>
              </div>
              <div className="timeline-item">
                <h3>Intermediate In M.P.C</h3>
                <span className="org">Sri Chaitanya Junior College</span> | <span>2018 - 2020</span>
                <p>
                 Sri Chaitanya Junior College. My time at the institution provided me with a strong academic foundation and instilled in me qualities such as discipline, time management, and perseverance, which have been valuable in shaping my personal and professional journey.
                </p>
                <strong>Percentage: 9.5</strong>
              </div>
              <div className="timeline-item">
                <h3>SSC</h3>
                <span className="org">APTWR School (Boys) Golladoddi</span>
                <p>
                  I completed my Secondary School Certificate (SSC) at APTWR School (Boys), Golladoddi, where I developed a strong academic foundation and actively took part in various school activities. My time at the school helped shape my character, instilling discipline, dedication, and teamwork, which continue to guide me in both my personal and professional life.</p>
                <strong>Percentage: 9.2</strong>
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div className="column">
            <h2>My Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <h3>Python Developer</h3>
                <span className="org">Government of Andhra Pradesh</span> | <span>Jan 2024 - Jun 2024</span>
                <p>
                  I worked as a Python Developer in a Government School in Andhra Pradesh, where I developed a Customer Relationship Management (CRM) System tailored to the school’s operations. Built using Python, Django, and MySQL, the system streamlined communication between staff, students, and parents, automated academic and administrative processes, and improved the management of student records, attendance, and feedback, resulting in enhanced efficiency and stronger stakeholder engagement.
                </p>
              </div>
              <div className="timeline-item">
                <h3>Full Stack Developer</h3>
                <span className="org">Paritech Soft Solution</span> | <span>Aug 2024 - May 2025</span>
                <p>
                I worked at Paritech Soft Solution as a Full Stack Developer for 10 months, where I contributed to multiple projects across both frontend and backend development. I developed an E-Commerce Website using HTML, CSS, and JavaScript, a Netflix Clone using React.js, and a Hospital Management System using React.js, Python, and Django. My role involved building responsive user interfaces, integrating backend APIs, managing databases, and ensuring smooth functionality across platforms, delivering efficient and user-friendly applications for diverse business needs.
</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certificates */}
     {activeTab === "certificates" && (
  <div className="certificates">
    <h2>Certificates</h2>
    <div className="cert-grid">
      {certificates.map((cert, index) => (
        <div key={index} className="cert-card">
          <h4>{cert.title}</h4>
          {cert.file ? (
            // Show PDF
            <embed src={cert.file} type="application/pdf" width="100%" height="300px" />
          ) : cert.url ? (
            // Show URL
            <a href={cert.url} target="_blank" rel="noopener noreferrer">
              <p style={{ marginTop: "10px", color: "blue", textDecoration: "underline" }}>
                View Certificate
              </p>
            </a>
          ) : (
            <p>No certificate available</p>
          )}
        </div>
      ))}
    </div>
  </div>
)}


    </div>
  );
};

export default About;
