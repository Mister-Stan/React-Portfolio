import React, { useState } from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import nodejs from "../images/nodejs.png";
import react from "../images/react.png";
import github from "../images/github.png";

const Homepage = () => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMoreClick = () => {
    setReadMore(!readMore);
  };

  return (
    <div>
      <div className="container">
        <h1>Hi there!</h1>

        <p style={{ fontSize: "18px" }}>
          Welcome to my portfolio website! I'm Eugeniu, a quirky introvert
          passionate about transforming lines of code into digital wonders. My
          coding journey started in high school with Borland Pascal, but the
          intrigue of GTA5 and the simulation hypothesis ignited my curiosity.
          This desire to create virtual worlds through programming led me to
          Scratch, where I honed my innovation and creativity. Alongside my
          coding pursuits, I refined my tennis skills, learning the importance
          of perseverance, dedication, and strategic thinking. These lessons
          taught me that success in coding and tennis comes from commitment and
          investing the necessary hours. Recently, I graduated from EDX's
          14-week intensive Web Development Bootcamp, mastering Javascript, Node
          JS, and React, which helped me further embrace my coding abilities.
        </p>

        {/* conditionally render the description based on showMore state */}
        {readMore && (
          <div className="description" style={{ fontSize: "18px" }}>
            I'm eager to find a full-time role that leverages my unique blend of
            humour, curiosity, and coding expertise. Skilled in crafting
            engaging virtual worlds and blessed with a personality that keeps
            things light and fun, I'm a web developer who brings a refreshing
            twist to the field. If you're looking for a web developer who can
            effortlessly juggle competence, enthusiasm, and a touch of
            quirkiness, I'm your go-to candidate! Let's embark on a coding
            adventure and create unforgettable digital experiences together.
            After all, who says coding can't be a barrel of laughs?
          </div>
        )}

        {/* add a "Read more" button */}
        <button
          onClick={handleReadMoreClick}
          style={{
            padding:"4px",
            borderRadius: "50px",
            border: "2px solid #e8ffe8",
            color: "#000000",
            background: "#107a8b",
            boxShadow: "inset 0px 1px 17px 7px rgba(242, 249, 250, 1)",
          }}
        >
          {readMore ? "Read less <" : "Read more >"}
        </button>

        <img
          src="../images/avataaars.png"
          style={{ display: "block", margin: "0 auto", maxWidth: "20%" }}
          alt="avatar"
        />
        {/* display the logos */}
        <div
          className="logos"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "13rem",
          }}
        >
          <img
            src={html}
            alt="HTML Logo"
            style={{ width: "11%", margin: "2rem" }}
          />
          <img
            src={css}
            alt="CSS Logo"
            style={{ width: "8%", margin: "2rem" }}
          />
          <img
            src={js}
            alt="JavaScript Logo"
            style={{ width: "16%", margin: "2rem" }}
          />
          <img
            src={nodejs}
            alt="Node.js Logo"
            style={{ width: "12%", margin: "2rem" }}
          />
          <img
            src={react}
            alt="React Logo"
            style={{ width: "10%", margin: "2rem" }}
          />
          <img
            src={github}
            alt="GitHub Logo"
            style={{ width: "13%", margin: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
