import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../context/DataContext"

const CartEmpty = () => {
  const { setShowCart } = useContext(DataContext)

  const handleClick = (e) => {
  setShowCart(false)
  }

  return (
    <>
      <Row>
        <Col className="d-flex flex-column align-items-center mt-4 pt-4">
          <h2>Tu carrito</h2>
          <h2>está vacío</h2>
          <h3 className=" fs-4">¡Falta pizza en tu vida!</h3>
            <Link to="/menu" onClick={handleClick}>
              <Button className="btn btn--secondary fs-4 my-4"
              >Pide tu pizza
              </Button>
            </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center m-2 pt-2">
          Usa el cupón <i className="bi bi-tag"></i> <span className="text-emphasis text-uppercase">tengohambre</span> y obtén un 10% de descuento en tu compra.
        </Col>
      </Row>


    </>
  )
}

export default CartEmpty