import { useState } from 'react'
import CallUs from "../components/Addons-CallUs"
import OpeningHours from "../components/Addons-OpeningHours"
import FoodMenuBeverages from "../components/FoodMenuBeverages"
import { Container, Row, Col, Form, Button, InputGroup, Alert } from "react-bootstrap"

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showAlert, setShowAlert] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container>
      <h1 className="">Escríbenos</h1>
      <Row className="flex-column flex-lg-row card-custom custom-shadow custom-margin-bottom p-lg-0 mx-1">
        <Col className="col-12 col-lg-3 p-3 custom-margin-top">
          <CallUs />
          <OpeningHours />
        </Col>
        <Col className="py-4 pe-4">
          <h3>Formulario de Contacto</h3>
          <Form onSubmit={handleSubmit}>
            <InputGroup size="lg" className="mb-4">
              <InputGroup.Text id="inputGroup-sizing-lg" className="fs-6 ps-1 ps-lg-3 w-25">Nombre</InputGroup.Text>
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
            <InputGroup size="lg" className="mb-4">
              <InputGroup.Text id="inputGroup-sizing-lg" className="fs-6 ps-1 ps-lg-3 w-25">Email</InputGroup.Text>
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
            <InputGroup size="lg" className="mb-4">
              <InputGroup.Text id="inputGroup-sizing-lg" className="fs-6 ps-1 ps-lg-3 w-25">Mensaje</InputGroup.Text>
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
            {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible className="mt-4">
          Mensaje enviado con éxito.
        </Alert>
      )}
          </Form>
        </Col>
        <Col className="col-12 col-lg-4 contact-custom-background py-4">
        </Col>
      </Row>
      <h2 className=" fs-1 pt-4 mt-4">Bebestibles</h2>
      <FoodMenuBeverages />
    </Container>

  );
}

export default ContactPage;
