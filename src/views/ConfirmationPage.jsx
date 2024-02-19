import { Container, Row, Col } from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';
import { useContext, useEffect } from "react"
import { DataContext } from "../context/DataContext"


const ConfirmationPage = () => {
  const { lastOrder, setLastOrder } = useContext(DataContext)
  const orderId = uuidv4();

  useEffect(() => {
    const orderInfo = localStorage.getItem('lastOrder');
    if (orderInfo) {
      setLastOrder(JSON.parse(orderInfo));
    }
  }, []);

  if (!lastOrder) {
    return <div>No se encontró información del pedido.</div>;
  }
  console.log(lastOrder)
  return (
    <Container>
      <h1 className="">Confirmación</h1>
      <Row className="flex-column flex-md-row card-custom custom-shadow custom-margin-bottom p-2 p-lg-0 mx-1">
        <Col className="py-2 px-lg-4 mx-lg-4">
          <h2 className="text-center pt-4 fs-3">¡Gracias por tu compra!</h2>

          <p>N° Pedido: {orderId}</p>
          <p>Total: {lastOrder.total}</p>
          <p>Horario de Entrega: {lastOrder.total}</p>
          <p>Ya estamos preparando tu pedido.</p>

        </Col>
        <Col className="confirmation-custom-background">
        </Col>
      </Row>
    </Container>
  )
}

export default ConfirmationPage