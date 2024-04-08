import { Row, Col, Image } from "react-bootstrap"

const FoodMenuCategories = () => {
  const scrollToAnchor = (anchorId) => {
    const anchorElement = document.getElementById(anchorId);
    if(anchorElement) {
      anchorElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <Row className="mt-5 gap-4 px-3 px-lg-2">
      <Col className="categories__box card-custom" onClick={() => scrollToAnchor('pizzasMenu')}>
          <Image src="https://as1.ftcdn.net/v2/jpg/01/44/16/30/1000_F_144163074_2GIzTmGuL3gAJZEtvWXxMdOk7FiasIIl.jpg"
            width={160} className="categories__img" />
          <div className="fs-4 mt-4 pt-4">
            Pizzas <span className="text-emphasis">Artesanales</span>
          </div>
      </Col>
      <Col className="categories__box card-custom" onClick={() => scrollToAnchor('sideDishesMenu')}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_JYeP_z2qb0_iYx-2VA47EQMHcgtUnbx_g&usqp=CAU"
            width={160} className="categories__img" />
          <div className="fs-4 mt-4 pt-4">
            Deliciosos <span className="text-emphasis">Acompañamientos</span>
          </div>
      </Col>
      <Col className="categories__box card-custom" onClick={() => scrollToAnchor('beveragesMenu')}>
          <Image src="https://static.vecteezy.com/system/resources/previews/023/625/098/non_2x/lemonade-with-lemon-and-mint-in-a-glass-on-a-table-in-a-restaurant-ai-generative-free-photo.jpg"
            width={160} className="categories__img" />
          <div className="fs-4 mt-4 pt-4">
            Bebestibles <span className="text-emphasis">Refrescantes</span>
          </div>
      </Col>
    </Row >
  )
}

export default FoodMenuCategories
