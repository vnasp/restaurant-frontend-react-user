import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Col, Row, Card, Button } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const FoodMenuSideDishes = () => {
  const { sideDishes, addToCart, CLP } = useContext(DataContext)
  const [sidedishSelected, setSideDishSelected] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault()
    navigate(`/sidedish/${sidedishSelected}/`)
  }

  return (
    <>
      <div id="sideDishesMenu" className="py-4 my-4">
        <h2 className="text-white fs-1 pb-4">Acompañamientos</h2>
        <Form onSubmit={handleSubmit}>
          <Row xs={1} md={2} lg={4} className="g-4">
            {sideDishes.map((sidedish) => (
              <Col key={sidedish.id}>
                <Card className="card-bg-custom text-white border-0 card-custom-shadow">
                  <Card.Img variant="top" src={sidedish.img} />
                  <Card.Body>
                    <Card.Title className="text-capitalize"><h4>{sidedish.name}</h4></Card.Title>
                    <hr></hr>
                    <div className="d-flex text-secondary"> 🍟 {sidedish.desc}
                    </div>
                  </Card.Body>
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <Card.Text className="fw-bolder fs-2 m-0">{CLP.format(sidedish.price)}
                    </Card.Text>
                    <Button className="btn secondary" type="button" value={sidedish.id} onClick={(e) => addToCart(e, 'value')}><i className="bi bi-basket pe-2"></i> Agregar</Button>
                  </Card.Body>

                </Card>
              </Col>

            ))}
          </Row>
        </Form >
      </div>
    </>
  )
}

export default FoodMenuSideDishes