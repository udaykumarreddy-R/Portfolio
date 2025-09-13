import React, { useState, useEffect } from "react";
import "./Home.css";
import bgImage from "../Assets/34.jpg";   // background image
import manImage from "../Assets/ChatGPT Image Jul 20, 2025, 09_47_57 PM.png"; // man image

const roles = [
  "Full Stack Developer",
  "Front End Developer",
  "Backend Developer",
  "Web Developer",
  "Python Developer",
];

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let typingSpeed = isDeleting ? 50 : 100;

    const typingEffect = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="home" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="home-content">
        {/* Left side text */}
        <div className="text-section">
          <h2>
             <span className="wave">👋</span> Hello, I am
          </h2>
          <h1>
             <span className="name">Ragipindi Uday Kumar Reddy</span> a{" "}
            <span className="typing">{text}</span>
            <span className="cursor">|</span>
          </h1>
           <p className="short-description">
            I’m a passionate developer with expertise in building dynamic,
            responsive, and user-friendly web applications. With a strong
            foundation in HTML, CSS, JavaScript, React, Python, and SQL, I love
            turning ideas into functional and visually appealing digital
            solutions.
          </p>
        </div>

        {/* Right side man image */}
        <div className="image-section">
          <img src={manImage} alt="Man" />
        </div>
      </div>
    </div>
  );
};

export default Home;
