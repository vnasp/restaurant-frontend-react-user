import { Container, Row, Col, Form, Card, InputGroup } from 'react-bootstrap'
import { MdLocationOn } from 'react-icons/md'
import DeliveryTimeSelect from '../components/DeliveryTimeSelect'
import TabsMenu from '../components/TabsMenu'
import CardDetail from '../components/CartDetail'

const OrderPage = () => {
  return (
    <Container className="pb-2 mb-2">
      <Row className="mb-2">
        <Col>
          <h1 className="text-white text-center">Haz tu Pedido</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Card className="card-custom shadow-none">
            <TabsMenu />
            <Card.Body>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-custom">
            <Card.Body>
              <Card.Title className="text-white">Detalles de Entrega</Card.Title>
                <Form.Group className="mb-3" controlId="formAddress">
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1"><MdLocationOn /></InputGroup.Text>
                    <Form.Control
                      placeholder="Dirección de entrega"
                      aria-label="address"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Form.Group>
                
                <DeliveryTimeSelect/>

                <Form.Group className="my-3" controlId="formNotes">
                  <Form.Control as="textarea" rows={3} placeholder="Instrucciones especiales" />
                </Form.Group>
                <CardDetail/>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default OrderPage