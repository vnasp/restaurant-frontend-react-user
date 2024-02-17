import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Col, Row, Card, Button } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const FoodMenuBeverages = () => {
  const { beverages, addToCart, CLP } = useContext(DataContext)
  const [beverageSelected, setBeverageSelected] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault()
    navigate(`/beverage/${beverageSelected}/`)
  }

  return (
    <>
      <div id="beveragesMenu" className="py-4 my-4">
        <Form onSubmit={handleSubmit}>
          <Row xs={1} md={2} lg={4} className="g-4">
            {beverages.map((beverage) => (
              <Col key={beverage.id}>
                <Card className="card-custom custom-shadow border-0">
                  <Card.Img variant="top" src={beverage.img} height={200}/>
                  <Card.Body>
                    <Card.Title className="text-capitalize"><h4>{beverage.name}</h4></Card.Title>
                    <hr></hr>
                    <div className="d-flex text-secondary"> 🍹 {beverage.desc}
                    </div>
                  </Card.Body>
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <Card.Text className="fw-bolder fs-2 m-0">{CLP.format(beverage.price)}
                    </Card.Text>
                    <Button className="btn secondary" type="button" value={beverage.id} onClick={() => addToCart({ id: beverage.id, type: 'beverage' })}><i className="bi bi-basket pe-2"></i> Agregar</Button>
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

export default FoodMenuBeverages