import FoodMenuSideDishes from "../components/FoodMenuSideDishes"
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';

const customIcon = L.icon({
  iconUrl: '/assets/img/iconLocation.png',
  shadowUrl: '/assets/img/iconShadow.png',
  iconSize: [38, 54], // Tamaño del icono
  shadowSize: [50, 15], // Tamaño de la sombra
  iconAnchor: [19, 54], // Punto del icono que corresponderá a la ubicación del marcador
  shadowAnchor: [1, 15],  // El mismo para la sombra del icono
  popupAnchor: [0, -54] // Punto desde el que se mostrará el popup
});
// Corrige el problema común del marcador faltante después de la importación
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const StoresPage = () => {
  const [filterText, setFilterText] = useState('');
  const locations = [
    { id: 1, position: [-33.440593, -70.632206], message: "Mamma Mia Parque Bustamante" },
    { id: 2, position: [-33.440180, -70.643682], message: "Mamma Mia Cerro Santa Lucía" },
    { id: 3, position: [-33.418564, -70.631288], message: "Mamma Mia Cerro San Cristóbal" },
    { id: 4, position: [-33.462292, -70.657410], message: "Mamma Mia Paruque O'Higgins" }
  ]

  const filteredLocations = locations.filter(location =>
    location.message.toLowerCase().includes(filterText.toLowerCase())
  );
  return (
    <Container className="custom-margin-bottom">
      <h1 className="text-white">Locales</h1>
      <h3 className="text-center pb-4">
            Nuestra pizzería se destaca por su singular ubicación dentro de parques, ofreciendo a sus clientes no solo una experiencia culinaria excepcional con sus deliciosas pizzas artesanales, sino también un <span>ambiente tranquilo y naturalmente hermoso</span>. Rodeados de exuberante vegetación, caminos serpenteantes y el tranquilo murmullo de la naturaleza, cada local invita a los visitantes a disfrutar de momentos de paz y relajación. Esta combinación única de <span>sabores gourmet y entornos naturales</span> convierte a nuestra pizzería en el destino perfecto para aquellos que buscan escapar del bullicio de la ciudad y sumergirse en una experiencia gastronómica relajante y revitalizante, donde cada bocado se acompaña de vistas impresionantes y aire fresco.</h3>
      <Row className="card-custom custom-shadow">
        <Col className="col-4">
          <div className="py-4">
            <InputGroup>
              <Form.Control
                placeholder="Busca tu Mamma Mia"
                aria-label="Busca tu Mamma Mia"
                aria-describedby="basic-input-filter"
                onChange={(e) => setFilterText(e.target.value)} // Actualiza el estado con el texto ingresado
              />
              <Button variant="btn primary">
                Filtrar
              </Button>
            </InputGroup>
          </div>
          <div className="d-flex flex-column">
            {filteredLocations.map((location) => (
              <div className="py-2" key={location.id}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#df554e" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg> {location.message}</div>
            ))}
          </div>
        </Col>
        <Col className="col-8 pe-0"> <MapContainer center={[-33.436746, -70.634436]} zoom={13} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location) => (
            <Marker key={location.id} position={location.position} icon={customIcon}>
              <Popup>{location.message}</Popup>
            </Marker>
          ))}
        </MapContainer></Col>
      </Row>
      <h2 className="text-white fs-1 pt-4 mt-4">Acompañamientos</h2>
      <FoodMenuSideDishes />
    </Container>
  );
}

export default StoresPage