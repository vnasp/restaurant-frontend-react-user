import CallUs from "../components/CallUs"
import OpeningHours from "../components/OpeningHours"
import FoodMenuBeverages from "../components/FoodMenuBeverages"
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
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container>
      <h1 className="">Escríbenos</h1>
      <Row className="flex-column flex-md-row card-custom custom-shadow custom-margin-bottom p-2 p-lg-0 mx-1">
        <Col className="p-3 custom-margin-top">
          <CallUs />
          <OpeningHours />
        </Col>
        <Col className="py-4 pe-4">
          <h3>Formulario de Contacto</h3>
          <Form onSubmit={handleSubmit}>
            <InputGroup size="lg" className="p-2">
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
            <InputGroup size="lg" className="p-2">
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
            <InputGroup size="lg" className="p-2 mb-2">
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
        </Col>
        <Col className="contact-custom-background py-4">
        </Col>
      </Row>
      <h2 className=" fs-1 pt-4 mt-4">Bebestibles</h2>
      <FoodMenuBeverages />
    </Container>

  );
}

export default ContactPage;
