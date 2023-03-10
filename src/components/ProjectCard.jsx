import React from "react";

function ProjectCard(props) {
  return (
    <div className="col-md-4 ">
      <div className="card text-center mb-5">
        <div className="card-img-top embed-responsive embed-responsive-16by9">
          <iframe
            title={props.title}
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${props.youtube.split("=")[1]}`}
            allowFullScreen
            width={"100%"}
            
          ></iframe>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {!props.live ? ("") : (
            <a
              href={props.live}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary me-5"
            >
              Live
            </a>
          )}

          {!props.github ? ("") : (
            <a
              href={props.github}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
