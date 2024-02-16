import { Container, Row, Col, Image } from "react-bootstrap"

const NotFound = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="text-white">¡Alguien se ha comido esta página!</h1>
            <h3>Prueba ingresando desde el inicio a tu pizza favorita</h3>
            <Image src="../assets/img/notfound.jpg" width={500} className="border rounded-circle border-5 border-dark mt-4" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound