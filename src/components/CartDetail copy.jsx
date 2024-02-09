import { useContext, useRef } from "react"
import { Row, Col, Table, Image, Button, Form } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const CartDetail = () => {
  const { CLP, cart, total, setCart, cartFilter, coupon, setCoupon } = useContext(DataContext)
  const cart_mamapuntos = Math.trunc(total / 100)
  const inputRef = useRef(null);

  const incrementQty = (e) => {
    const cartIndex = cart.findIndex(item => {
      return item.id === e.target.value
    })
    const updateCart = [...cart]
    updateCart[cartIndex] = { ...updateCart[cartIndex], qty: updateCart[cartIndex].qty + 1 }
    setCart(updateCart)
  }

  const decrementQty = (e) => {
    const cartIndex = cart.findIndex(item => {
      return item.id === e.target.value
    })
    const updateCart = [...cart]
    updateCart[cartIndex] = { ...updateCart[cartIndex], qty: updateCart[cartIndex].qty - 1 }
    if (updateCart[cartIndex].qty <= 0) { updateCart[cartIndex].qty = 0 }
    setCart(updateCart)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleClick = () => {
    setCoupon(inputRef.current.value.toLowerCase())
    inputRef.reset()
  }

  return (
    <>
      <Row>
        <Col>
        <Table className="w-100">
          <thead>
            <tr>
              <th className="w-25"></th>
              <th className="w-100">Pizza</th>
              <th className="w-50">Subtotal</th>
              <th className="w-25"></th>
              <th className="w-25">Cant.</th>
              <th className="w-25"></th>
            </tr>
          </thead>
          <tbody>
            {cartFilter.map((item) => (
              <tr className="align-middle" key={item.id}>
                <td><Image src={item.img} className="img-thumbnail" /> </td>
                <td className="text-capitalize">{item.name}</td>
                <td>{CLP.format(item.price * item.qty)}</td>
                <td><Button className="btn-light" type="button" value={item.id} onClick={(e) => decrementQty(e, 'value')}><i className="bi bi-dash-circle"></i></Button></td>
                <td className="text-center fw-bolder">{item.qty}</td>
                <td><Button className="btn-light" type="button" value={item.id} onClick={(e) => incrementQty(e, 'value')}><i className="bi bi-plus-circle-fill"></i></Button></td>
              </tr>
            ))}
          </tbody>
        </Table></Col>
      </Row>
      <Row>
        <Col> <div id="coupon-box" className="p-3 border rounded">
          <div className="fw-bolder pb-3 border-bottom">
            <Form onSubmit={handleSubmit}>
              <h5>Cupón de Descuento</h5>
              <div className="d-flex justify-content-center">
                <input ref={inputRef} type="text" className="me-2" style={{ width: '50%' }}></input>
                <Button className="border-0" onClick={handleClick}>Canjear</Button>
              </div>
            </Form>
          </div>
          <div className="fw-bolder fs-2 mb-3 text-center">Total: {CLP.format(total)}</div>
          <div className="text-center"></div>
        </div></Col>
      </Row>
      <Row>
        <Col><Button className="secondary btn-lg fs-4" type="button" href="#">Crear Orden</Button>
        </Col>
      </Row>
      <Row>
        <Col>¡Con esta compra acumularás {cart_mamapuntos} 🧑🏼‍🍳 MamaPuntos!</Col>
      </Row>
    </>
  )
}

export default CartDetail