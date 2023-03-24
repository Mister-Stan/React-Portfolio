import React from "react";

const Homepage = () => {
  return (
    <div>
    <div className="container">
      <h1>Hi there!</h1>

      <h4>Welcome to my portfolio website!
        I'm Eugeniu, a skilled web developer with experience in responsive
        design, user interface, and website functionality. I love working
        collaboratively with clients and team members to deliver top-quality
        results while always keeping best coding practices in mind.
      </h4>
      <img
        src="../images/avataaars.png"
        style={{ display: "block", margin: "0 auto", maxWidth:"25%"}}
        alt="avatar"
      />
    </div>
    </div>
  );
};

export default Homepage;
