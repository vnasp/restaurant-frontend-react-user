import { useContext, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Button, Card } from "react-bootstrap"
import { DataContext } from "../context/DataContext"
import FoodMenuBeverages from "../components/FoodMenuBeverages"

const PizzaPage = () => {
  const { pizzas, addToCart , CLP } = useContext(DataContext)
  const navigate = useNavigate()

  const { pizzaId } = useParams()
  const id = parseInt(pizzaId, 10);

  const pizzaIndex = pizzas.findIndex(pizza => {
    return pizza.id === id
  })

  useEffect(() => {
    window.scrollTo(0, 220);
  }, []); 

const handleClickBack = () => {
  navigate('/menu')
}

  return (
    <Container className="py-4 my-2">
      <Card key={pizzas[pizzaIndex].id} className="d-flex flex-column flex-lg-row card-custom custom-shadow overflow-hidden">
        <Card.Body className="px-2 px-lg-4 mx-2 mx-lg-4">
          <Card.Text className="p-2" onClick={handleClickBack}><i className="bi bi-arrow-left me-1"></i>Volver al Menú</Card.Text>
          <Card.Title className="mb-4 pt-2">
            <h1 className="text-capitalize">Pizza {pizzas[pizzaIndex].name}</h1>
          </Card.Title>
          <Card.Text className="text-justify">
            {pizzas[pizzaIndex].desc}
            </Card.Text>
            <div className="d-flex flex-column flex-lg-row text-white text-capitalize mb-4 pb-4">
              {pizzas[pizzaIndex].ingredients.map((ingredient, index) => (
                <p key={index} className="badge-red rounded-3 px-2 py-1 me-2">
                  {ingredient}
                </p>
              ))}
            </div>
          <Card.Text className="d-flex justify-content-between fw-bolder fs-2 mt-4 pt-4">
            Precio: {CLP.format(pizzas[pizzaIndex].price)}
            <Button className="btn secondary" type="button" value={pizzas[pizzaIndex].id} onClick={() => addToCart({ id: pizzas[pizzaIndex].id, type: 'pizza' })}><i className="bi bi-basket pe-2"></i> Agregar</Button>
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={pizzas[pizzaIndex].img} className="pizza-img"/>
      </Card>
      <div>
      <h2 className=" fs-1 pt-4 mt-4">Bebestibles</h2>
        <FoodMenuBeverages/>
      </div>
    </Container>
  )
}

export default PizzaPage
