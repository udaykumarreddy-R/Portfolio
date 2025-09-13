import React from "react";
import "./Projects.css";

// Import images from your folder
import project1 from "../Assets/1l.png";
import project2 from "../Assets/2l.png";
import project3 from "../Assets/3l.png";
import project4 from "../Assets/4l.png";
import project5 from "../Assets/5l.png";
import project6 from "../Assets/6l.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Delivery App",
      img: project1,
      description:
        "Our Food Delivery App is a simple and reliable platform that brings freshly prepared meals straight to users’ doorsteps. It offers a smooth ordering experience with features like menu browsing, search, filters, and cart management. Users can explore different dishes, view detailed descriptions, and place orders with ease. With its clean design and user-friendly interface, the app makes food delivery convenient and accessible anytime, anywhere",
      popup: "Food",
      github: "https://github.com/udaykumarreddy-R/Food-Delivery-App",
      deployed: "https://food-delivery-app-mu-eight.vercel.app/",
    },
    {
      id: 2,
      title: "Purohit Hub App",
      img: project2,
      description:
        "Purohit Hub is a one-stop platform that connects people with experienced priests for all kinds of religious rituals and ceremonies. Along with booking purohits, the app also provides catering and cooking facilities to make traditional events more convenient and complete. Users can easily check priest details, availability, and services while arranging food and rituals in one place. With its simple interface and reliable features, Purohit Hub ensures hassle-free spiritual and cultural celebrations anytime, anywhere.",
      popup: "Purohit Hub",
      github: "https://github.com/udaykumarreddy-R/Purohit-Hub",
      deployed: "https://purohit-hub.vercel.app/",
    },
    {
      id: 3,
      title: "E- Commerce App",
      img: project3,
      description:
        "Our E-Commerce App is a complete online shopping platform that offers a wide range of products across different categories. It provides a smooth and secure shopping experience with features like product search, filters, and cart management. Users can explore the latest collections and get detailed product information. With its clean design and reliable performance, the app makes online shopping simple, convenient, and accessible anytime, anywhere",
      popup: "E-commerce",
      github: "https://github.com/udaykumarreddy-R/E-commerce-website",
      deployed: "https://e-commerce-website-red-rho.vercel.app/",
    },
    {
      id: 4,
      title: "Weather App",
      img: project4,
      description:
        "Our Weather App provides real-time forecasts with accurate temperature, humidity, and climate updates based on your location. With a simple and user-friendly interface, it helps you stay prepared for daily and weekly weather changes. Whether it’s sunny, rainy, or cloudy, the app keeps you informed at all times. Plan your day with confidence using reliable and up-to-date weather insights.",
      popup: "Weather",
      github: "https://github.com/udaykumarreddy-R/weather1",
      deployed: "https://weather-swart-three-88.vercel.app/",
    },
    {
      id: 5,
      title: "Student Management App",
      img: project5,
      description:
        "The Student Management App simplifies the process of organizing and monitoring student information. From maintaining personal details to tracking attendance and academic performance, everything can be managed in one place. It helps teachers, students, and administrators stay connected and informed. With its intuitive interface, the app ensures smooth and efficient academic management for institutions of any size.",
      popup: "CRM-College",
      github: "https://github.com/udaykumarreddy-R/CRM-College",
      deployed: "https://crm-college-demo.vercel.app",
    },
    {
      id: 6,
      title: "Hospital App",
      img: project6,
      description:
        "The Hospital Management App is designed to streamline hospital operations and improve patient care. It helps manage patient records, doctor appointments, staff details, and medical reports in one unified platform. Administrators can track hospital activities efficiently, while patients benefit from easy access to healthcare services. With its simple interface and reliable features, the app ensures smooth and organized hospital management anytime, anywhere",
      popup: "Hospital",
      github: "https://github.com/udaykumarreddy-R/Hospital-Management",
      deployed: "https://hospital-demo.vercel.app",
    },
  ];

  return (
    <div className="projects-container">
      <div className="title-box">Latest Works</div>
      <div className="connector"></div>

      <div className="vertical-line">
        {projects.map((project, i) => (
          <div key={project.id} className="dot-container">
            <div className="dot"></div>
            <div className={`h-line ${i % 2 === 0 ? "left" : "right"}`}>
              <div className="line"></div>
              <div className="project-card1">
                <div className="project-card">
                  <div className="img-wrapper">
                    <img
                      src={project.img}
                      alt={project.title}
                      onClick={() => window.open(project.deployed, "_blank")}
                    />
                    {/* Popup on hover */}
                    <div
                      className="popup"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      {project.popup}
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
