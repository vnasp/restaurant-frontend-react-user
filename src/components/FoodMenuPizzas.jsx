import { useContext, useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Col, Row, Card, Button } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const FoodMenuPizzas = () => {
  const { pizzas, setPizzas, addToCart, CLP } = useContext(DataContext)
  const [pizzaSelected, setPizzaSelected] = useState('')

  const getPizzas = async () => {
    try {
      const response = await fetch("./pizzas.json")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setPizzas(data)
    } catch (error) {
      console.error("Error fetching data: ", error)
      alert("Error fetching data: " + error.message)
    }
  }
  useEffect(() => {
    getPizzas()
  }, [])

  const navigate = useNavigate()
  const handleNavigate = (pizzaId) => {
    navigate(`/pizzas/${pizzaId}/`);
  };


  return (
    <>
      <div id="pizzasMenu" className="py-4">
        <Row xs={1} md={2} lg={4} className="g-4">
          {pizzas.map((pizza) => (
            <Col key={pizza.id}>
              <Card className="card-custom custom-shadow border-0 mx-2 mx-lg-0">
                <Link to={`/pizzas/${pizza.id}/`} className="btn btn-link p-0">
                  <Card.Img variant="top" src={pizza.img} height={200} />
                </Link>
                <Card.Body>
                  <Card.Title className="text-capitalize"><h4>{pizza.name}</h4></Card.Title>
                  <hr></hr>
                  <div className="d-flex flex-wrap justify-content-between align-items-center text-secondary text-capitalize">
                    <div>🍕 {pizza.ingredients.join(', ')}.
                      <Button className="bg-secondary rounded-1 px-1 py-0 fs-6" type="submit" value={pizza.id} onClick={() => handleNavigate(pizza.id)}>Saber más</Button>
                    </div>
                  </div>
                </Card.Body>
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <Card.Text className="fw-bolder fs-2 m-0">{CLP.format(pizza.price)}
                  </Card.Text>
                  <Button className="btn secondary" onClick={() => addToCart({ id: pizza.id, type: 'pizza' })}><i className="bi bi-basket pe-2"></i> Agregar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default FoodMenuPizzas