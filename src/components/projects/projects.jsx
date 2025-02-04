import React from 'react';
import { Link } from 'react-router-dom'; // Importera Link för att kunna navigera tillbaka


const Projects = () => {
  return (
    <div className="projects">
      <h1>Mina Projekt</h1>
      <p>Här är några av mina senaste projekt:</p>
      {/* Lägg till en länk för att gå tillbaka till startsidan */}
      <Link to="/">
        <button className="backButton">Tillbaka till Startsidan</button>
      </Link>
    </div>
  );
};

export default Projects;