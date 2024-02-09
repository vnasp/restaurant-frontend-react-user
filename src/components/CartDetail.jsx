import { useContext, useRef, useState } from "react"
import { Row, Col, Accordion, Image, Button, Form, InputGroup } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const CartDetail = () => {
  const { CLP, total, cartFilter, coupon, setCoupon } = useContext(DataContext)
  const cart_mamapuntos = Math.trunc(total / 100)
  const inputRef = useRef(null);
  const [activeKey, setActiveKey] = useState("1");

  const toggleActiveKey = (key) => {
    setActiveKey(activeKey === key ? "" : key);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleClick = () => {
    setCoupon(inputRef.current.value.toLowerCase())
    inputRef.reset()
  }

  return (
    <>
      <Row className="mb-4">
        <Col>
          {cartFilter.map((item) => (
            <Row className="mb-3" key={item.id}>
              <Col className="col-4"><Image src={item.img} width={80} className="rounded-2" /></Col>
              <Col className="col-6 text-capitalize">
                <h3>{item.name}</h3>
                <h6 className="text-secondary">{item.ingredients.join(', ')}</h6>
                </Col>
              <Col className="col-2 fw-bolder">{item.qty}</Col>
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
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Accordion className="mb-4" activeKey={activeKey} flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="fs-6" onClick={() => toggleActiveKey("0")}> ¿Tienes un cupón de descuento? { activeKey === "0" ? <i className="bi bi-chevron-up ms-2"></i> : <i className="bi bi-chevron-down ms-2"></i>}
                </Accordion.Header>
                <Accordion.Body>
                  <InputGroup className="mb-3">
                    <Form.Control
                      ref={inputRef}
                      placeholder="Cupón"
                      aria-label="Cupón"
                      aria-describedby="cupon-input"
                    />
                    <Button variant="btn primary" id="cupon-button" onClick={handleClick}>
                      Canjear
                    </Button>
                  </InputGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button className="secondary btn-lg fs-4" type="button" href="#">Crear Orden</Button>
        </Col>
      </Row>
      <Row className="pt-4 text-secondary text-center">
        <Col>Acumulas <i className="bi bi-star"></i> {cart_mamapuntos} MammaPuntos</Col>
      </Row>
    </>
  )
}

export default CartDetail