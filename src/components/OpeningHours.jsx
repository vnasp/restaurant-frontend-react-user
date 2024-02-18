import { Row, Col } from "react-bootstrap"

const OpeningHours = () => {
  return (
    <div>
      <h4 className="mb-2">Nuestro horario de atención</h4>
      <Row className="flex-row flex-lg-column">
      <Col className="mb-4">
        Lunes a Viernes <br />
        11:30 am a 10:00 pm
      </Col>
      <Col>
        Viernes a Sábado <br />
        11:30 am a 11:00 pm
      </Col>
      </Row>
    </div>
  )
}

export default OpeningHours