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
        <div style={{display:"flex"}}>
        <img src='./images/cv-first.png' alt="myCVfirstPage" style={{maxWidth:'50%'}}></img>
        <img src='./images/cv-second.png' alt="myCVSecondPage" style={{maxWidth:'50%'}}></img>
        </div>
        <a href="./cv/EugeniuStan.pdf" download>Download my CV</a>
        
        </div>
        </div>
      </section>
      
      
  );
};

export default Contact;
