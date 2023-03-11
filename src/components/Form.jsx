import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import "./style.css";

function ContactForm () {
  return (
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Your name" id="name" required/>
      </Form.Group>

      <Form.Group>
      <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" placeholder="Your message" id="message" required/>
      </Form.Group>

      <Button variant="info" type="submit" id="button">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm