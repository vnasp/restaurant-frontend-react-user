import FoodMenuPizzas from "./FoodMenuPizzas"
import FoodMenuSideDishes from "./FoodMenuSideDishes"
import FoodMenuBeverages from "./FoodMenuBeverages"
import { Container, Tabs, Tab, Card } from 'react-bootstrap'


const FoodMenu = () => {

  return (
    <Container>
      <h1 className="">Haz tu pedido</h1>
        <Card className="bg-transparent  border-0 rounded-xl">
        <Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example">
          <Tab eventKey="tab1" title={<span className="nav-title">Pizzas Artesanales</span>} className="px-3">
            <FoodMenuPizzas/>
          </Tab>
          <Tab eventKey="tab2" title={<span className="nav-title">Acompañamientos</span>} className="px-3">
            <FoodMenuSideDishes />
          </Tab>
          <Tab eventKey="tab3" title={<span className="nav-title">Bebestibles</span>} className="px-3">
            <FoodMenuBeverages />
          </Tab>
        </Tabs>
        </Card>
    </Container>
  )
}

export default FoodMenu
