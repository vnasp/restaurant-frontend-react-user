import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Row, Col, Accordion, Image, Button, Form, InputGroup, Card } from "react-bootstrap"
import { DataContext } from "../context/DataContext"
import { FaCheck, FaTimes } from "react-icons/fa"
import DeliveryData from "./DeliveryData"


const CartDetail = () => {
  const { CLP, subtotal, total, cart, setCart, cartFilter, discountAmount, coupon, setCoupon, setShowCart } = useContext(DataContext)
  const rewardsPoints = Math.trunc(total / 100)
  const inputRef = useRef(null);
  const [activeKey, setActiveKey] = useState("1");
  const navigate = useNavigate()

  const toggleCoupon = (key) => {
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
    updateCart[cartIndex] = { ...updateCart[cartIndex], qty: updateCart[cartIndex].qty - 1 }
    setCart(updateCart)
  }    
  return (
    <>
      {cartFilter.map((item) => (
        <Row className="my-3" key={item.id}>
          <Col className="col-md-3 p-0 text-center">
            <Image src={item.img} width={60} className="rounded-2" />
            </Col>
          <Col className="col-md-6 p-0 text-capitalize">
            <h3>{item.name}</h3>
            {
              item.type === 'pizza' && <h6 className="text-secondary">{item.ingredients.join(', ')}</h6>
            }
          </Col>
          <Col className="col-md-3 p-0 fw-bolder text-center">
            <Button className="btn--secondary px-1 py-0 me-1" type="button" onClick={() => decrementQty(item.id)}><i className="bi bi-dash"></i></Button>
            {item.qty}
            <Button className="btn--secondary px-1 py-0 ms-1" type="button" onClick={() => incrementQty(item.id)}><i className="bi bi-plus"></i></Button>
          </Col>
        </Row>
      ))}
      <hr />
      <div className="d-flex justify-content-between fs-6">
        <div className="text-secondary">Subtotal: </div>
        <div>{CLP.format(subtotal)}</div>
      </div>
      <div className="d-flex justify-content-between fs-6">
        <div className="text-secondary">Envío: </div>
        <div>Gratis</div>
      </div>
      {coupon === "tengohambre" && (
        <div className="d-flex justify-content-between fs-6">
          <div className="text-secondary">Cupón: </div>
          <div>{CLP.format(discountAmount)}</div>
        </div>
      )}
      <hr />
      <div className="d-flex justify-content-between fs-6">
        <div className="text-secondary">Total: </div>
        <div>{CLP.format(total)}</div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Accordion className="mb-4" activeKey={activeKey} flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="fs-6" onClick={() => toggleCoupon("0")}> ¿Tienes un cupón de descuento? {activeKey === "0" ? <i className="bi bi-chevron-up ms-2"></i> : <i className="bi bi-chevron-down ms-2"></i>}
            </Accordion.Header>
            <Accordion.Body>
              <InputGroup className="mb-3">
                <Form.Control
                  ref={inputRef}
                  placeholder="Cupón"
                  aria-label="Cupón"
                  aria-describedby="input-for-coupon-discount"
                />
                <Button variant="btn btn--primary" id="cupon-button" onClick={handleCoupon}>
                  Canjear
                </Button>
              </InputGroup>
              {
                coupon ? (
                  coupon === "tengohambre" ? (
                    <div className="d-flex justify-content-end text-right align-items-center"><FaCheck className="me-2" /> Cupón aplicado</div>
                  ) : (
                    <div className="d-flex justify-content-end text-right align-items-center"><FaTimes className="me-2" /> Cupón inválido</div>
                  )
                ) : null
              }
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Form>
      <hr />
      <Card className="card-custom pb-4">
        <Card.Body>
          <Card.Title>Detalles de Entrega</Card.Title>
          <DeliveryData />
        </Card.Body>
      </Card>
      <Row className="pt-4 text-secondary text-center">
        <Col>Acumulas <i className="bi bi-star"></i> {rewardsPoints} MammaPuntos</Col>
      </Row>
    </>
  )
}

export default CartDetail
