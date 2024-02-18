import { Row, Col, Image } from "react-bootstrap"
import { Link } from 'react-router-dom';

const FoodMenuCategories = () => {

  return (
    <Row className="custom-margin-top gap-4">
      <Col className="position-relative overflow-visible d-flex flex-column justify-content-center align-items-center card-custom rounded-4 text-uppercase py-4">
        <a href="#pizzasMenu" className="text-white">
          <Image src="https://as1.ftcdn.net/v2/jpg/01/44/16/30/1000_F_144163074_2GIzTmGuL3gAJZEtvWXxMdOk7FiasIIl.jpg"
            height={120} className="border border-2 border-white rounded-3 position-absolute top-0 start-50 translate-middle" />
          <div className="fs-4 mx-4 pt-4">
            Pizzas <span className="text-emphasis">Artesanales</span>
          </div>
        </a>
      </Col>
      <Col className="position-relative overflow-visible d-flex flex-column justify-content-center align-items-center card-custom rounded-4 text-uppercase py-4">
        <a href="#sideDishesMenu" className="text-white">
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_JYeP_z2qb0_iYx-2VA47EQMHcgtUnbx_g&usqp=CAU"
            height={120} className="border border-2 border-white rounded-3 position-absolute top-0 start-50 translate-middle" />
          <div className="fs-4 mt-4 pt-4">
            Deliciosos <span className="text-emphasis">Acompañamientos</span>
          </div>
        </a>
      </Col>
      <Col className="position-relative overflow-visible d-flex flex-column justify-content-center align-items-center card-custom text-white rounded-4 text-uppercase py-4">
      <a href="#beveragesMenu" className="text-white">
<Image src="https://static.vecteezy.com/system/resources/previews/023/625/098/non_2x/lemonade-with-lemon-and-mint-in-a-glass-on-a-table-in-a-restaurant-ai-generative-free-photo.jpg"
          height={120} className="border border-2 border-white rounded-3 position-absolute top-0 start-50 translate-middle" />
        <div className="fs-4 mt-4 pt-4">
          Bebestibles <span className="text-emphasis">Refrescantes</span>
          </div>
          </a>
      </Col>
    </Row >
  )
}

export default FoodMenuCategories
