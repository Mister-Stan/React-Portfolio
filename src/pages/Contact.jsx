import React from 'react';
import Form from '../components/Form';

const Contact = () => {
  return (
      <section className="container">
        <h5
          style={{
            color: "black",
            lineHeight: "1.5",
            textAlign: "center",
          }}
        >
          I'm Eugene, a Web Developer dadafdssd dsa dfsfag gfgfgdfgdsd
          gfddfghgfdghfd fgdhfdgdfghgfdjf fdgfghfdhfd
        </h5> 
        <h1>Contact me!</h1>
        <h3 style={{textDecoration:"none"}}>Email: <a href = "mailto: lucianstan87@yahoo.com">lucianstan87@yahoo.com</a></h3>
        <h3>GitHub: <a href="https://github.com/Mister-Stan" target="_blank">https://github.com/Mister-Stan</a></h3>
        <h3>LinkedIn: <a href="https://www.linkedin.com/in/eugeniu-stan-256854268/" target="_blank">Eugeniu Stan</a></h3>
        <Form />
        <p>cv</p>
      </section>
  );
};

export default Contact;
