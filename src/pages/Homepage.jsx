import React from "react";
// Import logo images
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import nodejs from '../images/nodejs.png';
import react from '../images/react.png';
import github from '../images/github.png';

const Homepage = () => {
  return (
    <div>
      <div className="container">
        <h1>Hi there!</h1>

        <h4>
          Welcome to my portfolio website! I'm Eugeniu, a skilled web developer
          with experience in responsive design, user interface, and website
          functionality. I love working collaboratively with clients and team
          members to deliver top-quality results while always keeping best
          coding practices in mind.
        </h4>
        <img
          src="../images/avataaars.png"
          style={{ display: "block", margin: "0 auto", maxWidth: "25%" }}
          alt="avatar"
        />
        {/* Display the logos */}
        <div className="logos" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginTop: "10rem" }}>
          <img src={html} alt="HTML Logo" style={{ width: "15%", margin: "1rem" }} />
          <img src={css} alt="CSS Logo" style={{ width: "12%", margin: "1rem" }} />
          <img src={js} alt="JavaScript Logo" style={{ width: "22%", margin: "1rem" }} />
          <img src={nodejs} alt="Node.js Logo" style={{ width: "12%", margin: "1rem" }} />
          <img src={react} alt="React Logo" style={{ width: "12%", margin: "1rem" }} />
          <img src={github } alt="GitHub Logo" style={{ width: "12%", margin: "1rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
