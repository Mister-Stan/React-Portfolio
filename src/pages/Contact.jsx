import React from 'react';
import Form from '../components/Form';

const Contact = () => {
  return (
      <section className="container" style={{
  boxShadow: "10px 10px 15px 15px grey",
  padding: "2rem",
  borderRadius: "10px",
}}>
        <h2>
        Let's link up like Wi-Fi! Drop me a message using this form to share your thoughts:
        </h2> 
        <div>
          <Form />
          <div style={{marginTop:"50px"}}>
        <h3>My CV:</h3>
        <div style={{display:"flex", marginLeft:"7%", marginBottom:"30px"}}>
        <img src='./images/cv-first.png' alt="myCVfirstPage"></img>
        <img src='./images/cv-second.png' alt="myCVSecondPage"></img>
        </div>
        <a href="./cv/EugeniuStan.pdf" download>Download my CV</a>
        
        </div>
        </div>
      </section>
      
      
  );
};

export default Contact;
