import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../../projectsSlice"; // Uppdaterad path
import "./Projects.css";

const Projects = () => {
  const dispatch = useDispatch();
  const { data, languages, status, error } = useSelector((state) => state.projects);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);
  // Beräkna språkfördelning i procent
  const totalBytes = Object.values(languages).reduce((acc, val) => acc + val, 0);
  const languagePercentages = Object.entries(languages).map(([lang, bytes]) => ({
    lang,
    percentage: ((bytes / totalBytes) * 100).toFixed(2),
    
  }));

  return (
    <article className="projects">
      <h1>My GitHub Projects</h1>

      {status === "loading" && <p>Loading projects...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      <div className="projects-container">
        {status === "succeeded" &&
          data.map((repo) => (
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
                style={{ width: `${percentage}%`, backgroundColor: "DarkBlue" }}
              >
                {percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

    </article>
  );
};


export default Projects;
