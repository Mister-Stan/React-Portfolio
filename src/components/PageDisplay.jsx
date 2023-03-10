import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import React from "react";

const PageDisplay = (props) => {
  return (
    <div className="container-fluid">
      <Header />
      {/* <h1> PageDisplay</h1> */}
      {props.children}
      <Footer />
    </div>
  );
};

export default PageDisplay;
