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
      <h1 className="">Escríbenos</h1>

      <Row className="card-custom custom-shadow rounded-3">
        <Col className="col-3 p-3 custom-margin-top">
          <CallUs/>
          <OpeningHours />
        </Col>
        <Col className="col-6 py-4 pe-4">
          <Card.Title>Formulario de Contacto</Card.Title>
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
      <h2 className=" fs-1 pt-4 mt-4">Bebestibles</h2>
      <FoodMenuBeverages/>
    </Container>

  );
}

export default ContactPage;
