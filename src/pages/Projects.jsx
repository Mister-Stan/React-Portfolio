import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectsData from "../projectsData.json";

const Projects = () => {
  return (
    <div className="container" style={{
      boxShadow: 'rgba(128, 128, 128, 0.5) 10px 10px 15px 15px',
      padding: "2rem",
      borderRadius: "10px",
    }}>
      <h1 className="mb-4" >Projects:</h1>
      <div className="row">
        {ProjectsData.map((j) => (
          <ProjectCard
            key={j.id}
            id={j.id}
            title={j.title}
            youtube={j.youtube}
            live={j.live}
            github={j.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
