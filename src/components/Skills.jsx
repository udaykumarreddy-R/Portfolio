import React, { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaPython, FaCuttlefish, FaCode, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiDjango, SiOpenai, SiGithubcopilot, SiMysql, SiPandas, SiFastapi, SiSwagger, SiJson, SiJupyter, SiAxios, SiPostman, SiVercel, SiNetlify, SiTrello
} from "react-icons/si";
import { TbBrandCpp, TbBrandGithub, TbBrandSocketIo } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import { FaSlack, FaLeaf  } from "react-icons/fa";

import "./Skills.css";

const categories = [
  {
    title: "Skills",
    items: [
      { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
      { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
      { name: "React.js", icon: <FaReact color="#61DAFB" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "Django", icon: <SiDjango color="#092E20" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "C", icon: <FaCuttlefish color="#A8B9CC" /> },
      { name: "C++", icon: <TbBrandCpp color="#00599C" /> },
      { name: "Pandas", icon: <SiPandas color="#150458" /> },
    ],
  },
  {
    title: "Stacks",
    items: [
      { name: "Fast API", icon: <SiFastapi color="#009688" /> },
      { name: "RESTful API", icon: <MdWeb color="#4CAF50" /> },
      { name: "Flask API", icon: <FaPython color="#3776AB" /> },
      { name: "Axios", icon: <SiAxios color="#5A29E4" /> },
      { name: "JSON", icon: <SiJson color="#000000" /> },
      { name: "JWT", icon: <FaCode color="#FF5733" /> },
      { name: "Swagger", icon: <SiSwagger color="#85EA2D" /> },
      { name: "Web Socket", icon: <TbBrandSocketIo color="#010101" /> },
      { name: "GitHub", icon: <TbBrandGithub color="#181717" /> },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "VS Code", icon: <FaCode color="#007ACC" /> },
      { name: "Lime", icon: <FaLeaf color="#8BC34A" /> },
      { name: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
      { name: "Vercel", icon: <SiVercel color="#000000" /> },
      { name: "ChatGPT", icon: <SiOpenai color="#10A37F" /> },
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "Copilot", icon: <SiGithubcopilot color="#6CC644" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "Railway", icon: <MdWeb color="#5E17EB" /> },
      { name: "Trello", icon: <SiTrello color="#0079BF" /> },
      { name: "Notebook LM", icon: <SiJupyter color="#F37626" /> },
      { name: "Slack", icon: <FaSlack color="#E01E5A" /> },
    ],
  },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="skills-container">
      <h1 className="skills-title">🛠 My Toolkit</h1>

      {/* Tabs */}
      <div className="skills-tabs">
        {categories.map((cat, index) => (
          <button
            key={cat.title}
            onClick={() => setActiveIndex(index)}
            className={`tab-button ${activeIndex === index ? "active" : ""}`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="skills-grid">
        {categories[activeIndex].items.map((item) => (
          <div key={item.name} className="skill-card">
            <div className="skill-icon">{item.icon}</div>
            <p className="skill-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
