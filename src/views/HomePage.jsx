import { Container } from "react-bootstrap"
import FoodMenu from "../components/FoodMenu"
import FoodMenuCategories from "../components/FoodMenuCategories"


const HomePage = () => {
  return (
    <>
      <Container>
        <div className="text-center text-white pb-4 mb-4">
          <h1 >Bienvenidos a Mamma Mia</h1>
          <h3 className="">Somos una pizzería gourmet donde la <span>tradición y la innovación</span> se encuentran para ofrecerles una experiencia culinaria inolvidable. Nuestras pizzas artesanales están hechas con ingredientes de la más alta calidad, seleccionados cuidadosamente para brindarles <span>sabores auténticos y memorables</span>.
          Desde las clásicas recetas italianas hasta <span>creaciones únicas</span> de nuestra casa, cada pizza es una obra de arte cocida a la perfección en horno de leña. 
          Pide tu pizza y descubre por qué somos la elección predilecta de los amantes de la pizza gourmet.</h3>
          </div>
        <FoodMenuCategories/>
        <FoodMenu />
      </Container>
    </>
  )
}

export default HomePage