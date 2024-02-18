import OpeningHours from "./OpeningHours"
import CallUs from "./CallUs"
import SocialMedia from "./SocialMedia"
import { Row, Col, Image } from "react-bootstrap"

const FooterPage = () => {
  return (
    <>
      <div className="position-relative mt-4">
        <div className="skewed-footer"></div>
        <div id="footer">
          <Row className="d-flex flex-row align-items-start pt-4 text-center">
            <Col className="mt-4 pt-4">
              <CallUs />
            </Col>
            <Col className="mt-4 pt-4">
            <OpeningHours />
            </Col>
            <Col className="mt-4 pt-4">
              <SocialMedia />
              <div className="my-4"><span className="badge-red p-1 me-2">UX/UI</span> Natalia Muñoz</div>
              <div className="mb-2"><span className="badge-red p-1 me-2">FRONTEND</span> Valentina Muñoz</div>
            </Col>
            <Col className="mt-4 pt-4">
              <Image src="/assets/img/logo_white.png" width={200}/>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default FooterPage