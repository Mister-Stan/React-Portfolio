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
        
      </div>
    </section>
  );
};

export default Contact;
