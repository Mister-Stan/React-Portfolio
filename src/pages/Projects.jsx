import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import PageDisplay from '../components/PageDisplay.jsx';
import ProjectsData from '../projectsData.json';

const Projects = () => {
  return (
      <PageDisplay>
        <h1>projects</h1>
           <div className="container">
                <div class="row justify-content-around">
                {ProjectsData.map(j => <ProjectCard key={j.id}
                    id={j.id}
                    name={j.name}
                    image={j.image}
                    gif={j.gif}
                    site={j.site}
                    github={j.github}
                    info={j.info}
                />)}
                </div>
            </div>
        
      </PageDisplay>
  )
}

export default Projects
