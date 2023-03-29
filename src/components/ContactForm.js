import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

const ContactForm = () => {
  return (
    <Form>
     
        <Form.Group className="mb-3" controlId="nom">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Votre nom" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
        <Form.Label>Adresse email</Form.Label>
        <Form.Control type="email" placeholder="Votre email" />
        <Form.Text className="text-muted">
          Nous ne partagerons jamais votre email.
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Votre message</Form.Label><Badge bg="warning" text="dark">(entre 100 et 200 caractères)</Badge>
          <Form.Control as="textarea" row="3" />
        </Form.Group>
      <Button variant="primary" type="submit">
        Valider
      </Button>
    </Form>
  );
};

export default ContactForm;
