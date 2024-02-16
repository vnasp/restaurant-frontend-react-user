import SocialMedia from "./SocialMedia"
import CartDetail from "./CartDetail"
import CartEmpty from "./CartEmpty"
import { useContext, useState } from "react"
import { Container, Image, Nav, Navbar, Offcanvas, Button } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import { DataContext } from "../context/DataContext"

const Navigation = () => {
  const { CLP, cartFilter, total, handleInscribeClick } = useContext(DataContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const setActiveclassName = ({ isActive }) => (isActive ? "link-active" : "link-inactive")
  const location = useLocation();
  const isHome = location.pathname === '/'
  const isCart = cartFilter.length > 0


  return (
    <div className={isHome ? 'navigation p-4' : 'p-4 mb-4'}>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="position-relative py-5 d-flex justify-content-between" data-bs-theme="dark">
          <Container fluid className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start flex-grow-1">
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="secondary p-2" />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                className="offcanvas-custom"
              >
                <Offcanvas.Header closeButton className="menu-offcanvas-custom-tittle">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Navbar.Brand href="/"><Image src="/assets/img/logo_white.png" width={80} /></Navbar.Brand>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column justify-content-between ms-4">
                  <div className="watermark">MammaMia</div>
                  <Nav className="d-flex flex-column fs-4 text-white mb-5 pb-5">
                    <NavLink to="/pedir"
                      className={setActiveclassName}
                    > <i className="bi bi-basket pe-3"></i> Pide Online
                    </NavLink>
                    <NavLink to="/menu"
                      className={setActiveclassName}
                    > <i className="bi bi-book pe-3"></i> Menú
                    </NavLink>
                    <NavLink to="/locales"
                      className={setActiveclassName}
                    > <i className="bi bi-shop pe-3"></i> Locales
                    </NavLink>

                    <NavLink to="/puntos"
                      className={setActiveclassName}
                    > <i className="bi bi-star pe-3"></i> MammaPuntos
                    </NavLink>
                    <a onClick={handleInscribeClick} className="link-inactive">
                      <i className="bi bi-person pe-3"></i> Inscríbete
                    </a>
                    <NavLink to="/contacto"
                      className={setActiveclassName}
                    > <i className="bi bi-telephone pe-3"></i> Contacto
                    </NavLink>
                  </Nav>
                  <SocialMedia />
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
              <Navbar.Brand href="/" className="mx-auto"><Image src="/assets/img/logo_white.png" width={180} /></Navbar.Brand>
            </div>
            <div className="d-flex justify-content-end">

              <div className="fs-1">
                <a onClick={handleInscribeClick}>
                  <i className="bi bi-person-fill login-icon-custom"></i>
                </a>
              </div>
              <Button
                onClick={handleShow}
                id="carrito"
                className="text-white btn secondary d-flex align-items-center justify-content-center">

                <i className="bi bi-basket pe-2"></i>
                {CLP.format(total)}
              </Button>
            </div>
          </Container>
        </Navbar>
      ))}
      <Offcanvas show={show} onHide={handleClose} placement="end" className="card-custom text-white p-4">
        <Offcanvas.Header className="cart-offcanvas-custom-tittle" closeButton>
          <Offcanvas.Title className="fs-4">Tu Pedido</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isCart ? <CartDetail /> : <CartEmpty />}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Navigation


