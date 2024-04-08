import { Container, Row, Col } from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';
import { useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { DataContext } from "../context/DataContext"


const ConfirmationPage = () => {
  const { orderDetails, CLP } = useContext(DataContext)
  const orderId = uuidv4()


  return (
    <Container>
      <h1 className="">Orden Confirmada</h1>
      <Row className="flex-column flex-lg-row card-custom custom-shadow mb-5 p-2 p-lg-0 mx-1">
        <Col className="py-2 px-lg-4 mx-lg-4">
          <h2 className="text-center py-4 fs-3">Tu pedido está siendo preparado</h2>
          <p>Aquí está el detalle de tu compra:</p>
          <p>N° Pedido: {orderId}</p>
          <p>Total: {CLP.format(orderDetails.total)}</p>
          <p>Dirección de Entrega: {orderDetails.deliveryAddress}</p>
          <p>Horario de Entrega: {orderDetails.selectedTime}</p>
        </Col>
        <Col className="col-12 col-lg-4 section__background section__background--confirmation">
        </Col>
      </Row>
    </Container>
  )
}

export default ConfirmationPage