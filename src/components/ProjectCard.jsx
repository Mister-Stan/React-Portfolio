import React from "react";

function ProjectCard(props) {
  return (
    <div className="card text-center">
      <div className="card-img-top embed-responsive embed-responsive-16by9">
        <iframe
          title={props.title}
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${props.youtube}`}
          allowFullScreen
        ></iframe>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {!props.live ? (
          <a
            href={props.github}
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Github
          </a>
        ) : (
          <div>
            <a
              href={props.live}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Live
            </a>
            <a
              href={props.github}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary"
            >
              Github
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
