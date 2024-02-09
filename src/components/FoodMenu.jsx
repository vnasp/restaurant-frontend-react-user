import FoodMenuPizzas from "./FoodMenuPizzas"
import FoodMenuSideDishes from "./FoodMenuSideDishes"
import FoodMenuBeverages from "./FoodMenuBeverages"
import { Container } from "react-bootstrap"

const FoodMenu = () => {

    return (
      <Container className="pt-4 mt-4">
      <FoodMenuPizzas/>
      <FoodMenuSideDishes/>
      <FoodMenuBeverages/>
      </Container>
    )
}

export default FoodMenu
