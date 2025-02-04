import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../projectsSlice"; // Uppdaterad path
import { Link } from "react-router-dom";
import "./Projects.css";

const getLanguageColor = (lang) => {
  const colors = {
    JavaScript: "#f7df1e", // Gul
    HTML: "#e34c26", // Röd
    CSS: "#264de4", // Blå
    SASS: "#cf649a", // Rosa
    Python: "#306998", // Mörkblå
    PHP: "#4f5d95", // Grön
  };
  return colors[lang] || "#999"; // Standardgrå om språket saknas
};

const Projects = () => {
  const dispatch = useDispatch();
  const { data, languages, status, error } = useSelector((state) => state.projects);
  const [filter, setFilter] = useState(""); // Håller koll på valt språk

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
    <article className="projects">
      <h1>My GitHub Projects</h1>
      <Link to="/">
        <button>Back to Hero</button>
      </Link>

      {status === "loading" && <p>Loading projects...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      <div>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Alla</option>
          {Object.keys(languages).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <div className="projects-container">
          {status === "succeeded" &&
            data
              .filter((repo) => filter === "" || repo.language === filter)
              .map((repo) => (
                <div key={repo.id} className="project-card">
                  <h2>{repo.name}</h2>
                  <p>{repo.description || "No description available"}</p>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </div>
              ))}
                <div className="languages-box">
        <h2>Programming Languages Used</h2>
        {languagePercentages.map(({ lang, percentage }) => (
          <div key={lang} className="language-bar">
            <span>{lang}</span>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${percentage}%`, backgroundColor: getLanguageColor(lang) }}
              >
                {percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>

    </article>
  );
};

export default Projects;
