import React from "react";
import "./Projects.css";

const Project = () => {
  return (
    <section className="work-section">
      <h2>Latest Works</h2>

      {/* Project 1 */}
      <div className="project project1">
        <div className="project-img">
          <div className="project-img-wrapper">
            <a href="https://www.hacicurus.com/" target="_blank" rel="noreferrer">
              <img src="images/harigurus.webp" alt="Harigurus Project" draggable="false" />
            </a>
          </div>
        </div>

        <div className="project-details">
          <h3>Harigurus</h3>
          <span>(Event Booking)</span>
          <p>
            HariGurus is a one-stop-shop for all Hindu religious, customs and
            traditional requirements. Built the complete site from scratch.
          </p>
          <ul>
            <li>#react.js</li>
            <li>#express.js</li>
            <li>#node.js</li>
            <li>#swiper.js</li>
            <li>#mongodb</li>
            <li>#mongoose</li>
            <li>#css</li>
            <li>#javascript</li>
            <li>#figma</li>
          </ul>
          <a className="circle-dot" href="https://www.hacicurus.com/" target="_blank" rel="noreferrer"></a>
          <div className="circle-extension"></div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project project2">
        <div className="project-img">
          <div className="project-img-wrapper">
            <a href="https://eazygrad.com" target="_blank" rel="noreferrer">
              <img src="images/eazygrad.webp" alt="EazyGrad Project" draggable="false" />
            </a>
          </div>
        </div>

        <div className="project-details">
          <h3>EazyGrad</h3>
          <span>(EdTech Startup)</span>
          <p>
            Being a lead developer, revamped the site to a highly responsive one
            with new features and pages. Worked as a team with product manager
            and UX designer.
          </p>
          <ul>
            <li>#node.js</li>
            <li>#express.js</li>
            <li>#mongoDB</li>
            <li>#mongoDBAtlas</li>
            <li>#ejs</li>
            <li>#swiper.js</li>
            <li>#html</li>
            <li>#css</li>
            <li>#javascript</li>
            <li>#lighthouse</li>
            <li>#figma</li>
          </ul>
          <a className="circle-dot" href="https://eazygrad.com" target="_blank" rel="noreferrer"></a>
          <div className="circle-extension"></div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project project3">
        <div className="project-img">
          <div className="project-img-wrapper">
            <a href="https://money-arjan.netlify.app/" target="_blank" rel="noreferrer">
              <img src="images/money-arjan.webp" alt="Money Arjan Project" draggable="false" />
            </a>
          </div>
        </div>

        <div className="project-details">
          <h3>Money Arjan Solutions</h3>
          <span>(Software Development Agency)</span>
          <p>
            Designed and developed the site from scratch. Integrated contact form in the website using Netlify.
          </p>
          <ul>
            <li>#html</li>
            <li>#css</li>
            <li>#bootstrap</li>
            <li>#netlify</li>
            <li>#figma</li>
          </ul>
          <a className="circle-dot" href="https://money-arjan.netlify.app/" target="_blank" rel="noreferrer"></a>
          <div className="circle-extension"></div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="project project4">
        <div className="project-img">
          <div className="project-img-wrapper">
            <a href="https://webdevenglish.com/" target="_blank" rel="noreferrer">
              <img src="images/web-dev-english.webp" alt="Web Dev English Project" draggable="false" />
            </a>
          </div>
        </div>

        <div className="project-details">
          <h3>Web Dev English</h3>
          <span>(Coaching and Consulting)</span>
          <p>
            US-based English Coach's website for guiding techies. Improved existing look and added new sections.
          </p>
          <ul>
            <li>#wordpress</li>
            <li>#elementor</li>
            <li>#html</li>
            <li>#css</li>
            <li>#javascript</li>
            <li>#figma</li>
          </ul>
          <a className="circle-dot" href="https://webdevenglish.com/" target="_blank" rel="noreferrer"></a>
          <div className="circle-extension"></div>
        </div>
      </div>

      {/* Project 5 */}
      <div className="project project5">
        <div className="project-img">
          <div className="project-img-wrapper">
            <a href="https://digi-drive.netlify.app/" target="_blank" rel="noreferrer">
              <img src="images/pioneer-digital.webp" alt="Pioneer Digital Project" draggable="false" />
            </a>
          </div>
        </div>

        <div className="project-details">
          <h3>Pioneer Digital</h3>
          <span>(Digital Marketing Agency)</span>
          <p>
            Featured site while working with TheBrandwick.com (agency). Worked as a frontend developer to make the site interactive and responsive.
          </p>
          <ul>
            <li>#javascript</li>
            <li>#bootstrap</li>
            <li>#sass</li>
            <li>#html</li>
            <li>#figma</li>
          </ul>
          <a className="circle-dot" href="https://digi-drive.netlify.app/" target="_blank" rel="noreferrer"></a>
          <div className="circle-extension"></div>
        </div>
      </div>

      {/* Project 6 */}
      <div className="project project6">
        <div className="project-img">
          <div className="project-img-wrapper">
            <a href="https://currency-converter-by-anurag.netlify.app/" target="_blank" rel="noreferrer">
              <img src="images/currency-converter.webp" alt="Currency Converter Project" draggable="false" />
            </a>
          </div>
        </div>

        <div className="project-details">
          <h3>Currency Converter</h3>
          <span>(Productivity Tool)</span>
          <p>
            I made this app when I started learning React. This app uses an external API for currency rates with a clean and simple UI.
          </p>
          <ul>
            <li>#react.js</li>
            <li>#javascript</li>
            <li>#jsx</li>
            <li>#css</li>
            <li>#ajax</li>
            <li>#fetchAPI</li>
            <li>#figma</li>
          </ul>
          <a className="circle-dot" href="https://currency-converter-by-anurag.netlify.app/" target="_blank" rel="noreferrer"></a>
          <div className="circle-extension"></div>
        </div>
      </div>

      {/* Vertical Line */}
      <div className="vertical-line"></div>
    </section>
  );
};

export default Project;
