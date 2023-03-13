import React from "react";
// import Header from "../components/Header.jsx";

const Homepage = () => {
  return (
    <div>
    <div className="container" style={{marginBottom:"2rem"}}>
      <h1>Hi there!</h1>

      <h4>Welcome to my portfolio website!
        I'm Eugeniu, a skilled web developer with experience in responsive
        design, user interface, and website functionality. I love working
        collaboratively with clients and team members to deliver top-quality
        results while always keeping best coding practices in mind.
      </h4>
      <img
        src="../images/avataaars.png"
        style={{ display: "block", margin: "0 auto", maxWidth:"100%"}}
        alt="avatar"
      />
    </div>
    </div>
  );
};

export default Homepage;
