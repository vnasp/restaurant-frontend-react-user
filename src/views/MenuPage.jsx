import FoodMenuPizzas from "../components/FoodMenuPizzas"
import FoodMenuSideDishes from "../components/FoodMenuSideDishes"
import FoodMenuBeverages from "../components/FoodMenuBeverages"
import { Container, Tabs, Tab, Card } from 'react-bootstrap'


const MenuPage = () => {

  return (
    <Container>
      <h1 className="">Haz tu pedido</h1>
        <Card className="bg-transparent  border-0 rounded-xl">
        <Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example">
          <Tab eventKey="tab1" title={<span className="nav-title">Pizzas</span>}>
            <FoodMenuPizzas/>
          </Tab>
          <Tab eventKey="tab2" title={<span className="nav-title">Acompañamientos</span>}>
            <FoodMenuSideDishes />
          </Tab>
          <Tab eventKey="tab3" title={<span className="nav-title">Bebestibles</span>}>
            <FoodMenuBeverages />
          </Tab>
        </Tabs>
        </Card>
    </Container>
  )
}

export default MenuPage
