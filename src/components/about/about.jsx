import React from "react";
import Section from "../section"; // Återanvändbar komponent
import { useTheme } from "../themeContext"; // Importera useTheme
import { Link } from 'react-router-dom';
import "./about.css";

const About = () => {
  const { theme, toggleTheme } = useTheme(); // Hämta temat och toggle-funktionen
  // Lista med tekniska kompetenser och nivåer
  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 70 },
    { name: "React", level: 50 },
    { name: "Python", level: 70 },
    { name: "C#", level: 30 },
  ];
  // Lista med UX-kompetenser och nivåer
  const uxSkills = [
    { name: "Figma", level: 80 },
    { name: "AdobeXD", level: 60 },
    { name: "Adobe Illustrator", level: 50 },
    { name: "Wireframing", level: 70 },
    { name: "UX-research", level: 80 },

  ];

  return (
    
    <main className={`about-page ${theme}`}> {/* Dynamisk klass för ljus/mörkt tema */}
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </button>
        {/* Använder global komponent sektion för att skapa en sektion om mig */}
      <Section title="About me" content="I am a passionate front-end developer with a deep love for UX design.
       I believe that the combination of these two disciplines creates powerful and user-friendly digital experiences.
       My goal is to work at a company where I can be involved in the entire process—from design to development—ensuring that
       both aesthetics and functionality are perfectly aligned. I thrive in environments where creativity and technical
       expertise go hand in hand, and I am always eager to learn and grow in both fields." />
        <div className="titles">
        <h2>Front-end qualification</h2>
        <h3>UX qualification</h3>
       </div>
      <section className="skills-section">
        {/* Vi kommer åt listan och mappar igenom den för att få ut värdena */}
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.name} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <progress className="skill-progress" value={skill.level} max="100"></progress>
              <span className="skill-level">{skill.level}%</span>
            </li>
          ))}
        </ul>
        <ul className="skills-list">
          {uxSkills.map((skill) => (
            <li key={skill.name} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <progress className="skill-progress" value={skill.level} max="100"></progress>
              <span className="skill-level">{skill.level}%</span>
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer">
        <Link to="/">
        <button class="button"> Startsida </button>
        </Link>
      </footer>
    </main>
  );
};

export default About;
