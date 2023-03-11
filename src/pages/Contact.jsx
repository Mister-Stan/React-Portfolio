import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';

const Contact = () => {
  return (<div>
      <section className="container"  style={{position: 'relative'}}>
        <h2>
        Let's link up like Wi-Fi! Drop me a message using this form to share your thoughts:
        </h2> 
        <div>
          <Form />
        <h3>My CV:</h3>
        </div>
      </section>
      </div>
      
  );
};

export default Contact;
