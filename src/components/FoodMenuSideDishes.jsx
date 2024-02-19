import { useContext } from "react"
import { Form, Col, Row, Card, Button } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const FoodMenuSideDishes = () => {
  const { sideDishes, addToCart, CLP } = useContext(DataContext)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div id="sideDishesMenu" className="py-4">
        <Form onSubmit={handleSubmit}>
          <Row xs={1} md={2} lg={4} className="g-4">
            {sideDishes.map((sidedish) => (
              <Col key={sidedish.id}>
                <Card className="card-custom custom-shadow border-0 mx-2 mx-lg-0">
                  <Card.Img variant="top" src={sidedish.img} height={200} />
                  <Card.Body>
                    <Card.Title className="text-capitalize"><h4>{sidedish.name}</h4></Card.Title>
                    <hr></hr>
                    <div className="d-flex text-secondary"> 🍟 {sidedish.desc}
                    </div>
                  </Card.Body>
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <Card.Text className="fw-bolder fs-2 m-0">{CLP.format(sidedish.price)}
                    </Card.Text>
                    <Button className="btn secondary" type="button" value={sidedish.id} onClick={() => addToCart({ id: sidedish.id, type: 'sidedish' })}><i className="bi bi-basket pe-2"></i> Agregar</Button>
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