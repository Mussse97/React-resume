import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../projectsSlice"; // Importera fetchProjects från projectsSlice
import { Link } from "react-router-dom";
import "./Projects.css";

// Anger färger för de olika språken
const getLanguageColor = (lang) => {
  const colors = {
    JavaScript: "#817727", 
    HTML: "#e34c26", 
    CSS: "#264de4", 
    SCSS: "#cf649a",
    Python: "#306998", 
    PHP: "#4f5d95", 
  };
  return colors[lang] || "#999"; // Standardgrå om språket saknas
};

const Projects = () => {
  //  använder dispatch för att skicka en action till Redux store, detta fall för att hämta projekt från GitHub.
  const dispatch = useDispatch();
  //  använder useSelector för att hämta status, data och error från Redux store.
  const { data, languages, status, error } = useSelector((state) => state.projects);
  const [filter, setFilter] = useState(""); // Håller koll på valt språk
  
  //  använder useEffect för att hämta projekt från GitHub när komponenten renderas.
  //  kontrollerar om status är "idle" för att undvika att hämta data flera gånger.
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);

  // Beräkna språkfördelning i procent
  const totalBytes = Object.values(languages).reduce((acc, val) => acc + val, 0) || 1; // Undviker division med 0
  const languagePercentages = Object.entries(languages).map(([lang, bytes]) => ({
    lang,
    percentage: ((bytes / totalBytes) * 100).toFixed(2),
  }));

  return (
    <main className="projects">
      <h1>My GitHub Projects</h1>
      <Link to="/">
        <button className="button">Back to start</button>
      </Link>
      {/* kontrollerar status för att visa lämpligt meddelande */}
      {status === "loading" && <p>Loading projects...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      <article>
        {/* lägger till en select för att filtrera på språk */}
        <select className="project-filter" onChange={(e) => setFilter(e.target.value)}>
          <option value="">Alla</option>
          {Object.keys(languages).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        {/* visar projekten som hämtats från GitHub i med att status är "succeeded"*/}
        <section className="projects-container">
          {status === "succeeded" &&
            data
              .filter((repo) => filter === "" || repo.language === filter)
              .map((repo) => (
                <section key={repo.id} className="project-card">
                  <h3>{repo.name}</h3>
                  <p>{repo.description || "No description available"}</p>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </section>
              ))}
              <section className="languages-box">
            <h2>Programming Languages Used</h2>
            {languagePercentages.map(({ lang, percentage }) => (
              <section key={lang} className="language-bar">
                <span>{lang}</span>
                <section className="progress">
                  {/*  visar språkfördelning i procent.*/}
                  <section
                    className="progress-bar"
                    style={{ width: `${percentage}%`, backgroundColor: getLanguageColor(lang) }}>{percentage}%
                  </section>
                </section>
                </section>
                  ))}
              </section>
        </section>
      </article>

    </main>
  );
};

export default Projects;
