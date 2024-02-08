import FoodMenuPizzas from "./FoodMenuPizzas"
import FoodMenuSideDishes from "./FoodMenuSideDishes"
import FoodMenuBeverages from "./FoodMenuBeverages"

const FoodMenu = () => {

    return (
      <div className="pt-4 mt-4">
      <FoodMenuPizzas/>
      <FoodMenuSideDishes/>
      <FoodMenuBeverages/>
      </div>
    )
}

export default FoodMenu
