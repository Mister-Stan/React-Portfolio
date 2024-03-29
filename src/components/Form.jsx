import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function ContactForm () {
  return (
    <Form >
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="email" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Your name" id="name" required/>
      </Form.Group>

      <Form.Group>
      <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" placeholder="Your message" id="message" required/>
      </Form.Group>

      <Button style={{marginTop:"10px", boxShadow: 'rgba(128, 128, 128, 0.5) 5px 5px 5px 5px'}} variant="info" type="submit" id="button">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm