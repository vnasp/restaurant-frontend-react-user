import SocialMedia from "./SocialMedia"
import { useContext } from "react"
import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { DataContext } from "../context/DataContext"

const Navigation = () => {
  const { CLP, total } = useContext(DataContext)
  const setActiveclassName = ({ isActive }) => (isActive ? "active" : undefined)

  return (
    <>
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
                <Offcanvas.Header closeButton className="offcanvas-custom-tittle">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Navbar.Brand href="/"><Image src="/logo_white.png" width={80} /></Navbar.Brand>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="d-flex flex-column justify-content-between ms-4">
                  <div className="watermark">MammaMia</div>
                  <Nav className="d-flex flex-column fs-4 text-white mb-5 pb-5">
                    <Nav.Link to="/pizzas"
                      className={setActiveclassName}
                    > <i className="bi bi-basket pe-3"></i> Pide Online
                    </Nav.Link>
                    <Nav.Link to="/pizzas"
                      className={setActiveclassName}
                    > <i className="bi bi-book pe-3"></i> Menú
                    </Nav.Link>

                    <Nav.Link to="/sucursales"
                      className={setActiveclassName}
                    > <i className="bi bi-shop pe-3"></i> Locales
                    </Nav.Link>

                    <Nav.Link to="/puntos"
                      className={setActiveclassName}
                    > <i className="bi bi-star pe-3"></i> MammaPuntos
                    </Nav.Link>
                    <Nav.Link to="/inscribete"
                      className={setActiveclassName}
                    > <i className="bi bi-person pe-3"></i> Inscríbete
                    </Nav.Link>
                    <Nav.Link to="/sucursales"
                      className={setActiveclassName}
                    > <i className="bi bi-telephone pe-3"></i> Contacto
                    </Nav.Link>
                  </Nav>
                  <SocialMedia />
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">
              <Navbar.Brand href="#" className="mx-auto"><Image src="/logo_white.png" width={180} /></Navbar.Brand>
            </div>
            <div className="d-flex justify-content-end">
              <div className="fs-1">
                <i className="bi bi-person-fill login-icon-custom"></i>
              </div>
              <div id="carrito" className="btn secondary d-flex align-items-center justify-content-center">
                <NavLink
                  to="/carrito"
                  className="text-white"
                >
                  <i className="bi bi-basket pe-2"></i>
                  {CLP.format(total)}
                </NavLink>
              </div>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation


