import { Container, Button, Image } from "react-bootstrap"
import FoodMenuPizzas from "../components/FoodMenuPizzas"
import { DataContext } from "../context/DataContext"
import { useContext } from "react"


const PointsPage = () => {
  const { handleInscribeClick } = useContext(DataContext)

  return (
  <>
    <Container>
    <h1 className="">MammaPuntos</h1>
      <div className="card-custom custom-shadow custom-margin-bottom">
        <div className="px-4 mx-4">
          <h2 className="text-center pt-4 fs-3">¡Sé parte! Prueba más, ahorra más.</h2>
          <div className="py-4">En pizzería Mamma Mia, queremos agradecer a nuestros clientes su lealtad. Por cada compra, acumula MammaPuntos que puedes canjear por deliciosas recompensas.
          </div>
          <div className="mb-4">
            <h4>Cómo Funciona</h4>
            <i className="bi bi-star text-emphasis"></i> Acumula 1 MammaPunto por cada $1 gastado en nuestras pizzas gourmet.<br />
            <i className="bi bi-person-fill text-emphasis"></i> Regístrate hoy y comienza con 50 puntos de bonificación.
          </div>
          <div className="d-flex flex-column justify-content-start align-items-start">
            <div className="mb-4">
              <h4>Beneficios y Recompensas</h4>
              100 puntos: Pizza Vegetariana gratis.<br />
              200 puntos: 20% de descuento en tu próxima compra.
            </div>
            <div className="mb-4">
              <i className="bi bi-patch-question-fill text-emphasis"></i> ¿Los MammaPuntos expiran? Tus puntos son válidos durante 12 meses desde la última compra.<br />
              <i className="bi bi-patch-question-fill text-emphasis"></i> Cómo acumulo MammaPuntos? ¡Simple! Regístrate y ya estás acumulando.
            </div>
          </div>
          <div className="mb-4 text-center">
            ¿Listo para unirte?<br/>
            ¡Haz más con cada bocado! Inscríbete y comienza a acumular MammaPuntos hoy.<br /><br/>
              <a onClick={handleInscribeClick} className="btn secondary  inactive">
                      <i className="bi bi-person pe-3"></i> Inscríbete
                    </a>
          </div>
        </div>
        <div className="custom-points-background">
        </div>
      </div>
      <h2 className=" fs-1 pt-4 mt-4">Pizzas Artesanales</h2>
      <FoodMenuPizzas/>
    </Container>
    
    </>
  )
}

export default PointsPage