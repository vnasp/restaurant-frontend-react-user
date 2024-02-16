import { useContext, useRef, useState } from "react"
import { Row, Col, Accordion, Image, Button, Form, InputGroup } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const CartDetail = () => {
  const { CLP, total, cart, setCart, cartFilter, coupon, setCoupon } = useContext(DataContext)
  const cart_mamapuntos = Math.trunc(total / 100)
  const inputRef = useRef(null);
  const [activeKey, setActiveKey] = useState("1");

  const toggleActiveKey = (key) => {
    setActiveKey(activeKey === key ? "" : key);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleCoupon = () => {
    setCoupon(inputRef.current.value.toLowerCase())
    inputRef.current.value = ''
  }

  const incrementQty = (productId) => {
    const cartIndex = cart.findIndex(item => item.id === productId);
    const updateCart = [...cart]
    updateCart[cartIndex] = { ...updateCart[cartIndex], qty: updateCart[cartIndex].qty + 1 }
    setCart(updateCart)
  }

  const decrementQty = (productId) => {
    const cartIndex = cart.findIndex(item => item.id === productId);
    const updateCart = [...cart]
    updateCart[cartIndex] = { ...updateCart[cartIndex], qty: updateCart[cartIndex].qty + 1 }
    setCart(updateCart)
  }

  return (
    <>
      {cartFilter.map((item) => (
            <Row className="mb-3" key={item.id}>
              <Col className="col-3"><Image src={item.img} width={80} className="rounded-2" /></Col>
              <Col className="col-6 text-capitalize">
                <h3>{item.name}</h3>
                {
                  item.type === 'pizza' && <h6 className="text-secondary">{item.ingredients.join(', ')}</h6>
                }
              </Col>
              <Col className="col-3 fw-bolder">
                <Button className="btn secondary px-1 py-0 me-1" type="button" onClick={() => decrementQty(item.id)}><i className="bi bi-dash"></i></Button>
                {item.qty}
                <Button className="btn secondary px-1 py-0 ms-1" type="button" onClick={() => incrementQty(item.id)}><i className="bi bi-plus"></i></Button>
              </Col>
            </Row>
          ))}
          <hr />
          <div className="d-flex justify-content-between fs-6">
            <div className="text-secondary">Subtotal: </div>
            <div>{CLP.format(total)}</div>
          </div>
          <div className="d-flex justify-content-between fs-6">
            <div className="text-secondary">Envío: </div>
            <div>Gratis</div>
          </div>
          <hr />
          <div className="d-flex justify-content-between fs-6">
            <div className="text-secondary">Total: </div>
            <div>{CLP.format(total)}</div>
          </div>
          <Form onSubmit={handleSubmit}>
            <Accordion className="mb-4" activeKey={activeKey} flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="fs-6" onClick={() => toggleActiveKey("0")}> ¿Tienes un cupón de descuento? {activeKey === "0" ? <i className="bi bi-chevron-up ms-2"></i> : <i className="bi bi-chevron-down ms-2"></i>}
                </Accordion.Header>
                <Accordion.Body>
                  <InputGroup className="mb-3">
                    <Form.Control
                      ref={inputRef}
                      placeholder="Cupón"
                      aria-label="Cupón"
                      aria-describedby="input-for-coupon-discount"
                    />
                    <Button variant="btn primary" id="cupon-button" onClick={handleCoupon}>
                      Canjear
                    </Button>
                  </InputGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Form>
      <Button className="btn secondary w-100 fs-4" type="button" href="#">Crear Orden</Button>
      <Row className="pt-4 text-secondary text-center">
        <Col>Acumulas <i className="bi bi-star"></i> {cart_mamapuntos} MammaPuntos</Col>
      </Row>
    </>
  )
}

export default CartDetail