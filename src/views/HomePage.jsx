import { Container, Row, Col, Button } from "react-bootstrap"
import FoodMenuPizzas from "../components/FoodMenuPizzas"
import FoodMenuSideDishes from "../components/FoodMenuSideDishes"
import FoodMenuBeverages from "../components/FoodMenuBeverages"
import FoodMenuCategories from "../components/FoodMenuCategories"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <div className="position-relative mb-3">
        <div className="header-custom-background px-5 py-4">
          <Row className="align-items-end pt-5 mt-5">
            <Col className="col-md-5 text-center text-white">
              <div className="pb-4 header-custom-padding">
                <h2>Pizzería Gourmet</h2>
                <h3>Tradicionales y simples, pero con el sabor de generaciones</h3>
              </div>
              <Link to="/menu">
                <Button className="btn secondary fs-4"
                >Pide tu pizza
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
        <div className="skewed-header">
        </div>
      </div>
      <Container>
        <div className="text-center text-white pb-4 mb-4">
          <h1 >Bienvenidos a Mamma Mia</h1>
          <h3>Somos una pizzería gourmet donde la <span>tradición y la innovación</span> se encuentran para ofrecerles una experiencia culinaria inolvidable. Nuestras pizzas artesanales están hechas con ingredientes de la más alta calidad, seleccionados cuidadosamente para brindarles <span>sabores auténticos y memorables</span>.
            Desde las clásicas recetas italianas hasta <span>creaciones únicas</span> de nuestra casa, cada pizza es una obra de arte cocida a la perfección en horno de leña.
            Pide tu pizza y descubre por qué somos la elección predilecta de los amantes de la pizza gourmet.</h3>
        </div>
        <FoodMenuCategories />
        <h2 className="text-white fs-1 pt-4 mt-4">Pizzas Artesanales</h2>
        <FoodMenuPizzas />
        <h2 className="text-white fs-1 pt-4 mt-4">Acompañamientos</h2>
        <FoodMenuSideDishes />
        <h2 className="text-white fs-1 pt-4 mt-4">Bebestibles</h2>
        <FoodMenuBeverages />
      </Container>
    </>
  )
}

export default HomePage