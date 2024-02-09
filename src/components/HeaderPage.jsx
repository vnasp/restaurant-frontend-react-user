import Navigation from "./Navigation"
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"


const HeaderPage = () => {
  return (
    <>
    
    <div className="position-relative mb-3">
      <div className="header-custom-background px-5 py-4">
      <Navigation />
        <Row className="align-items-end pt-5 mt-5">
          <Col className="col-md-5 text-center text-white">
            <div className="pb-4">
              <h2>Pizzería Gourmet</h2>
              <h3>Tradicionales y simples, pero con el sabor de generaciones</h3>
            </div>
            <div className="btn secondary fs-4">
              <Link to="#pizzas"
              className="text-white"
              >Pide tu pizza
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <div className="skewed-header"></div>
    </div></>
  )
}

export default HeaderPage