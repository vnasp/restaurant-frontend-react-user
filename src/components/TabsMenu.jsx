import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { Row, Col, Card, Tabs, Tab,  Button } from 'react-bootstrap'

const TabsMenu = () => {
  const { pizzas, sideDishes, beverages, addToCart, CLP } = useContext(DataContext)

  return (
    <Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="tab1" title="Pizzas" className="px-3">
        <Row>
          {pizzas.map((pizza) => (
            <Col sm={12} md={6} lg={4} key={pizza.id} className="my-2 px-2">
                <Card className="box-shadow shadow-none">
                  <Card.Header className="p-1 bg-white">
                    <Card.Title className="text-capitalize px-2"><h4>{pizza.name}</h4> </Card.Title>
                  </Card.Header>
                  <Card.Body className="d-flex flex-row">
                    <Card.Subtitle className="text-secondary text-capitalize"> <h6>{pizza.ingredients.join(', ')}</h6></Card.Subtitle>
                    <Card.Img variant="right" src={pizza.img} width={80} height={60} />
                  </Card.Body>
                <Card.Footer className="d-flex flex-row justify-content-between align-items-center">
                  {CLP.format(pizza.price)}
                  <Button className="secondary px-1 py-0" type="button" value={pizza.id} onClick={() => addToCart({ id: pizza.id, type: 'pizza' })}><i className="bi bi-plus"></i></Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Tab>
      <Tab eventKey="tab2" title="Acompañamientos" className="px-3">
      <Row>
          {sideDishes.map((sidedish) => (
            <Col sm={12} md={6} lg={4} key={sidedish.id} className="my-2 px-2">
              <Card className="box-shadow shadow-none">
                  <Card.Header className="p-1 bg-white">
                    <Card.Title className="text-capitalize px-2"><h4>{sidedish.name}</h4> </Card.Title>
                  </Card.Header>
                  <Card.Body className="d-flex flex-row">
                    <Card.Subtitle className="text-secondary"> <h6>{sidedish.desc}</h6></Card.Subtitle>
                    <Card.Img variant="right" src={sidedish.img} width={80} height={60}/>
                  </Card.Body>
                <Card.Footer className="d-flex flex-row justify-content-between align-items-center">
                  {CLP.format(sidedish.price)}
                  <Button className="secondary px-1 py-0" type="button" value={sidedish.id} onClick={() => addToCart({ id: sidedish.id, type: 'sidedish' })}><i className="bi bi-plus"></i></Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Tab>
      <Tab eventKey="tab3" title="Bebestibles" className="px-3">
      <Row>
          {beverages.map((beverage) => (
            <Col sm={12} md={6} lg={4} key={beverage.id} className="my-2 px-2">
              <Card className="box-shadow shadow-none">
                  <Card.Header className="p-1 bg-white">
                    <Card.Title className="text-capitalize px-2"><h4>{beverage.name}</h4> </Card.Title>
                  </Card.Header>
                  <Card.Body className="d-flex flex-row">
                    <Card.Subtitle className="text-secondary"> <h6>{beverage.desc}</h6></Card.Subtitle>
                    <Card.Img variant="right" src={beverage.img} width={80} height={60}/>
                  </Card.Body>
                <Card.Footer className="d-flex flex-row justify-content-between align-items-center">
                  {CLP.format(beverage.price)}
                  <Button className="secondary px-1 py-0" type="button" value={beverage.id} onClick={() => addToCart({ id: beverage.id, type: 'beverage' })}><i className="bi bi-plus"></i></Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Tab>
    </Tabs>
  )
}

export default TabsMenu

