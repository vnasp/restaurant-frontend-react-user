import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Col, Row, Card, Button } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const FoodMenuPizzas = () => {
  const { pizzas, addToCart, CLP } = useContext(DataContext)
  const [pizzaSelected, setPizzaSelected] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/pizzas/${pizzaSelected}/`)
  }

  return (
    <>
      <div id="pizzasMenu" className="py-4">
        <h2 className="text-white fs-1 pb-4">Pizzas Artesanales</h2>
        <Form onSubmit={handleSubmit}>
          <Row xs={1} md={2} lg={4} className="g-4">
            {pizzas.map((pizza) => (
              <Col key={pizza.id}>
                <Card className="card-custom text-white border-0 w">
                  <Card.Img variant="top" src={pizza.img} height={200} />
                <Card.Body>
  <Card.Title className="text-capitalize"><h4>{pizza.name}</h4></Card.Title>
  <hr></hr>
  <div className="d-flex flex-wrap justify-content-between align-items-center text-secondary text-capitalize">
    <div>🍕 {pizza.ingredients.join(', ')}. <Button className="bg-secondary rounded-1 px-1 py-0 fs-6" type="submit" value={pizza.id} onClick={({ target }) => setPizzaSelected(target.value)}>Saber más</Button>
 </div>
  </div>
</Card.Body>

                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <Card.Text className="fw-bolder fs-2 m-0">{CLP.format(pizza.price)}
                    </Card.Text>
                    <Button className="btn secondary" type="button" value={pizza.id} onClick={() => addToCart({ id: pizza.id, type: 'pizza' })}><i className="bi bi-basket pe-2"></i> Agregar</Button>
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

export default FoodMenuPizzas