import { Container, Row, Col, Image } from "react-bootstrap"

const NotFound = () => {
  return (
    <>
      <Container className="padding-custom">
        <Row className="mb-3">
          <Col className="text-center">
            <h1>¡Alguien se ha comido esta página!</h1>
            <h3>Prueba ingresando desde el inicio a tu pizza favorita</h3>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Image src="../assets/img/notfound.png" className="w-25" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound