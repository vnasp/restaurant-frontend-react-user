import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const CartEmpty = () => {
  return (
    <>
      <Row>
        <Col className="d-flex flex-column align-items-center mt-4 pt-4">
          <h2>Tu carrito</h2>
          <h2>está vacío</h2>
          <h3 className="text-white fs-4">¡Falta pizza en tu vida!</h3>
          <div className="btn secondary fs-4 my-4">
            <Link to="/pedir" >
              <Button className="btn secondary fs-4"
              >Pide tu pizza
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center m-2 pt-2">
            Usa el cupón <i className="bi bi-tag"></i> <span className="text-emphasis">TENGOHAMBRE</span> y obtén un 10% de descuento en tu compra.
        </Col>
      </Row>


    </>
  )
}

export default CartEmpty