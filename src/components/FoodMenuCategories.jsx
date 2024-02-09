import { Row, Col, Image } from "react-bootstrap"
import { Link } from 'react-router-dom';

const FoodMenuCategories = () => {

  return (
    <Row className="mt-custom gap-4">
      <Col className="position-relative overflow-visible d-flex flex-column justify-content-center align-items-center card-bg-custom text-white rounded-4 text-uppercase py-4">
        <Image src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          height={120} className="border border-2 border-white rounded-3 position-absolute top-0 start-50 translate-middle" />
        <div className="fs-4 mt-4 pt-4">
          Pizzas <span className="text-emphasis">Artesanales</span></div>
      </Col>
      <Col className="position-relative overflow-visible d-flex flex-column justify-content-center align-items-center card-bg-custom text-white rounded-4 text-uppercase py-4">
      <Image src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          height={120} className="border border-2 border-white rounded-3 position-absolute top-0 start-50 translate-middle" />
          <div className="fs-4 mt-4 pt-4">
          Deliciosos <span className="text-emphasis">Acompañamientos</span></div>
      </Col>
      <Col className="position-relative overflow-visible d-flex flex-column justify-content-center align-items-center card-bg-custom text-white rounded-4 text-uppercase py-4">
      <Image src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
          height={120} className="border border-2 border-white rounded-3 position-absolute top-0 start-50 translate-middle" />
          <div className="fs-4 mt-4 pt-4">
        Bebestibles <span className="text-emphasis">Refrescantes</span></div>
      </Col>
    </Row >
  )
}

export default FoodMenuCategories
