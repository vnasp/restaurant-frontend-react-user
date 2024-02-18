import OpeningHours from "./OpeningHours"
import CallUs from "./CallUs"
import SocialMedia from "./SocialMedia"
import { Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const FooterPage = () => {
  return (
    <>
      <div className="position-relative mt-4">
        <div className="skewed-footer"></div>
        <div id="footer">
          <Row className="pt-5 mt-5">
            <Col className="col-sm-0 col-md-5">
            </Col>
            <Col className="col-sm-1 col-md-2 text-white">
            <CallUs/>
              <div className="pb-2"><h4>Enlaces de ayuda</h4></div>
              <div className="d-flex flex-column justify-content-start">
                <Link to="/contacto" className="mb-2 text-white">Escríbenos</Link>
                <Link to="/contacto" className="mb-2 text-white">Trabaja con Nosotros</Link>
                <Link to="/contacto" className="mb-2 text-white">Sugerencias</Link>
              </div>
            </Col>
            <Col className="col-sm-1 col-md-2">
              <OpeningHours />
            </Col>
            <Col className="col-sm-1 col-md-2 d-flex flex-column justify-content-start align-items-center">
              <Image src="/assets/img/logo_white.png" width={100} className="mb-4" />
              <SocialMedia />
              <div className="pt-5">
                <div className="text-white mb-4"><span className="badge-red p-1 me-2">UX/UI</span> Natalia Muñoz</div>
                <div className="text-white mb-2"><span className="badge-red p-1 me-2">FRONTEND</span> Valentina Muñoz</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default FooterPage