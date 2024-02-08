import OpeningHours from "./OpeningHours"
import SocialMedia from "./SocialMedia"
import { Row, Col, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const FooterPage = () => {
  return (
    <>
      <div className="position-relative">
        <div className="skewed-footer"></div>
        <div id="footer" className="pt-5 mt-5">
          <Row className="pt-5 mt-5">
            <Col className="col-md-5">
            </Col>
            <Col className="col-md-2 text-white">
              <div className="pb-2"><h4>Contacto</h4></div>
              <div className="d-flex flex-column justify-content-start">
                <Link href="#" className="mb-2 text-white">Escríbenos</Link>
                <Link href="#" className="mb-2 text-white">Trabaja con Nosotros</Link>
                <Link href="#" className="mb-2 text-white">Sugerencias</Link>
              </div>
            </Col>
            <Col className="col-md-2">
              <OpeningHours />
            </Col>
            <Col className="col-md-2 d-flex flex-column justify-content-start align-items-center">
              <Image src="/logo_white.png" width={100} className="mb-4" />
              <SocialMedia />
              <div className="pt-5">
                <div className="text-white mb-4"><span className="badge py-1 px-2 me-2">UX/UI</span> Natalia Muñoz</div>
                <div className="text-white mb-2"><span className="badge py-1 px-2 me-2">FRONTEND</span> Valentina Muñoz</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default FooterPage