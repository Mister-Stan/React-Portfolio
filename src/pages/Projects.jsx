import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import PageDisplay from "../components/PageDisplay.jsx";
import ProjectsData from "../projectsData.json";

const Projects = () => {
  return (
    <PageDisplay>
      <div className="container-fluid">
        <h1 className="mb-4">Projects</h1>
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
    </PageDisplay>
  );
};

export default Projects;
