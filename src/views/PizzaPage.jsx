import { Container, Row, Col } from "react-bootstrap"
import PizzaCard from "../components/PizzaDetail"

const PizzaPage = () => {
    return (
        <>
            <Container className="padding-custom">
                <Row className="mb-3">
                    <Col className="text-center">
                        <h1>Conoce más de nuestras pizzas</h1>
                        <h3>Masa delgada, horneada y además ...</h3>
                    </Col>
                </Row>
                <PizzaCard />
            </Container>
        </>
    )
}

export default PizzaPage