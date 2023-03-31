import React from "react";
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
        {/* display the logos */}
        <div className="logos" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginTop: "13rem" }}>
          <img src={html} alt="HTML Logo" style={{ width: "11%", margin: "2rem" }} />
          <img src={css} alt="CSS Logo" style={{ width: "8%", margin: "2rem" }} />
          <img src={js} alt="JavaScript Logo" style={{ width: "16%", margin: "2rem" }} />
          <img src={nodejs} alt="Node.js Logo" style={{ width: "12%", margin: "2rem" }} />
          <img src={react} alt="React Logo" style={{ width: "10%", margin: "2rem" }} />
          <img src={github } alt="GitHub Logo" style={{ width: "13%", margin: "2rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
