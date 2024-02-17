import CallUs from "../components/CallUs"
import OpeningHours from "../components/OpeningHours"
import { Container, Row, Col, Form, Button, Card, InputGroup, Image } from "react-bootstrap"
import { useState } from 'react'


function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para enviar los datos del formulario, por ejemplo, usando fetch o axios
    console.log(formData);
    // Reiniciar el formulario
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container className="custom-margin-bottom">
      <Row className="card-custom text-whiterounded-3">
        <Col className="col-3 p-4 margin-top-custom">
          <CallUs/>
          <OpeningHours />
        </Col>
        <Col className="col-6 py-4 pe-4">
          <Card.Title><h2 className="fs-1">Escríbenos</h2></Card.Title>
          <Card.Body className="pe-4">
            <Form onSubmit={handleSubmit}>
              <InputGroup size="lg" className="py-4">
                <InputGroup.Text id="inputGroup-sizing-lg" className="w-25">Nombre</InputGroup.Text>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-lg"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              <InputGroup size="lg" className="py-4">
                <InputGroup.Text id="inputGroup-sizing-lg" className="w-25">Email</InputGroup.Text>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-lg"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              <InputGroup size="lg" className="py-4">
                <InputGroup.Text id="inputGroup-sizing-lg" className="w-25">Mensaje</InputGroup.Text>
                <Form.Control
                  as="textarea"
                  aria-describedby="textArea-sizing-lg"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              <Button type="submit" className="btn secondary">Enviar</Button>
            </Form>
          </Card.Body>
        </Col>
        <Col className="col-3 contact-custom-background">
        </Col>
      </Row>
    </Container>
    

  );
}

export default ContactPage;
