import React from "react";

const Footer = () => {
  return (
    <div className="container" style={{ marginTop: "20rem"}}>
     
      <h5 style={{ display: "inline-block", marginRight: "9rem" }}>
        Email:{" "}
        <a
          href="mailto: lucianstan87@yahoo.com"
          style={{ textDecoration: "none"}}
        >
         lucianstan87@yahoo.com
        </a>
      </h5 >
      <h5 style={{ display: "inline-block", marginRight: "9rem" }}>
        GitHub:{" "}
        <a
          href="https://github.com/Mister-Stan"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          Mister-Stan
        </a>
      </h5>
      <h5 style={{ display: "inline-block", marginRight: "9rem" }}>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/eugeniu-stan-256854268/"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          Eugeniu Stan
        </a>
      </h5>
    </div>
  );
};

export default Footer;
