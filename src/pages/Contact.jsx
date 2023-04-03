import React from 'react';
import Form from '../components/Form';

const Contact = () => {
  return (
    <section className="container" style={{
      boxShadow: "10px 10px 15px 15px grey",
      padding: "2rem",
      borderRadius: "10px",
    }}>
      <h4>
        Let's link up like Wi-Fi! Drop me a message using this form to share your thoughts:
      </h4> 
      <div>
        <Form />
        <div style={{marginTop:"50px"}}>
          <h4>My CV:</h4>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{margin: 'auto', maxWidth: '100%'}}>
              <img src='./images/cv-first.png' alt="myCVfirstPage" style={{width: '100%'}}></img>
            </div>
            <div style={{margin: 'auto', maxWidth: '100%'}}>
              <img src='./images/cv-second.png' alt="myCVSecondPage" style={{width: '100%'}}></img>
            </div>
          </div>
          <a href="./cv/EugeniuStan.pdf" download>Download my CV</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
