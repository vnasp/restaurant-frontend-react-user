import FoodMenuPizzas from "./FoodMenuPizzas"
import FoodMenuSideDishes from "./FoodMenuSideDishes"
import FoodMenuBeverages from "./FoodMenuBeverages"
import { Container } from "react-bootstrap"

const FoodMenu = () => {

    return (
      <Container>
      <FoodMenuPizzas/>
      <FoodMenuSideDishes/>
      <FoodMenuBeverages/>
      </Container>
    )
}

export default FoodMenu
