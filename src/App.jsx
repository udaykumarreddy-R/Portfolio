import React from "react";
import "./App.css";
import Home from "./components/Home"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Review from "./components/Review";
import Skills from "./components/Skills"
import About from "./components/About"
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <Header />

      {/* Sections */}
      <section id="home" style={{ height: "100vh", background: "#111", color: "white" }}>
        <Home />
      </section>

      <section id="about" style={{ background: "#222", color: "white" }}>
         <About />
      </section>

      <section id="projects" style={{ background: "#333", color: "white" }}>
        <Projects />
      </section>

      <section id="skills" style={{ background: "#444", color: "white" }}>
       <Skills/>
      </section>

      <section id="review" style={{  background: "#555", color: "white" }}>
        <Review/>
      </section>

      <section id="contact" style={{  background: "#666", color: "white" }}>
         <Contact/>
      </section>
     
      <Footer/>
    </div>
    
  );
}

export default App;
