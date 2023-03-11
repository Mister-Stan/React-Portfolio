import React from "react";

function ProjectCard(props) {
  return (
    <div className="col-md-6">
      <div className="card text-center mb-5" style={{borderRadius:'15px', background:'#C0C0C0', paddingTop:'1rem',boxShadow: 'rgba(128, 128, 128, 0.5) 10px 10px 10px 10px'
}}>
        <div className="card-img-top embed-responsive embed-responsive-16by9">
          <iframe
            title={props.title}
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${props.youtube.split("=")[1]}`}
            allowFullScreen
            width={"60%"}
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
              style={{boxShadow: 'rgba(128, 128, 128, 0.5) 10px 10px 10px 5px'}}
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
              style={{boxShadow: 'rgba(128, 128, 128, 0.5) 10px 10px 10px 5px'}}
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
