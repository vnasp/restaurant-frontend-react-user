import SocialMedia from "./SocialMedia"
import CartDetail from "./CartDetail"
import CartEmpty from "./CartEmpty"
import { useContext, useState } from "react"
import { Container, Image, Nav, Navbar, Offcanvas, Button } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import { DataContext } from "../context/DataContext"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Navigation = () => {
  const { CLP, cartFilter, total } = useContext(DataContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const setActiveclassName = ({ isActive }) => (isActive ? "active" : "inactive")
  const location = useLocation();
  const isHome = location.pathname === '/'
  const isCart = cartFilter.length > 0

  const handleInscribeClick = (e) => {
    e.preventDefault(); // Previene la navegación
    MySwal.fire({
      title: '<h2>Regístrate en Mamma Mia</h2>',
      html: `
        <p class="text-white">Acumula MammaPuntos y guarda todos tus pedidos.</p>
        <button type="button" class="login-with-google-btn">Ingresa con Google</button>
      `,
      showConfirmButton: false,
      showCancelButton: false,
      focusConfirm: false,
      customClass: {
        popup: 'custom-popup' // Clase personalizada para el popup si necesitas más estilos
      },
      didRender: (element) => {
        // Añade el manejador de eventos para el botón de Google después de renderizar la alerta
        const loginBtn = element.querySelector('.login-with-google-btn');
        loginBtn.addEventListener('click', () => {
          // Aquí implementas la lógica para iniciar sesión con Google
          console.log('Iniciar sesión con Google');
        });
      }
    });

  };


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
                    <a onClick={handleInscribeClick} className="inactive">
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
                <i className="bi bi-person-fill login-icon-custom"></i>
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
      <Offcanvas show={show} onHide={handleClose} placement="end" className="card-bg-custom text-white p-4">
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


