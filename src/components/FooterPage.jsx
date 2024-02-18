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
          <Row className="flex-column flex-lg-row align-items-start pt-4 m-4 text-center bg-opacity-25">
            <Col className="mt-2 mt-lg-4 pt-4">
              <CallUs />
            </Col>
            <Col className="mt-lg-4 pt-lg-4">
              <OpeningHours />
            </Col>
            <Col className="mt-lg-4 pt-lg-4">
              <SocialMedia />
              <div className="my-2 my-lg-4"><span className="badge-red p-1 me-2">UX/UI</span> Natalia Muñoz</div>
              <div className="mb-2"><span className="badge-red p-1 me-2">FRONTEND</span> Valentina Muñoz</div>
            </Col>
            <Col className="mt-4 pt-4 d-none d-lg-block">
              <Image src="/assets/img/logo_white.png" width={200} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default FooterPage