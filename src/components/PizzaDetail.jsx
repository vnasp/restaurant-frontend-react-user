import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Image, Button } from "react-bootstrap"
import { DataContext } from "../context/DataContext"

const PizzaCard = () => {
    const { pizzas, addToCart, CLP } = useContext(DataContext)
    const { id } = useParams()

    const pizzaIndex = pizzas.findIndex(pizza => {
        return pizza.id === id
    })

    const pizzaIngredients = pizzas[pizzaIndex].ingredients?.map((ingredient, i) => {
        return (<li key={i}>🍕 {ingredient}</li>)
    })

    return (
        <>
            <div id="pizza_card" key={pizzas[pizzaIndex].id} className="border rounded bg-white align-items-start d-flex mb-3">
                <div>
                    <Image src={pizzas[pizzaIndex].img} id="pizza_img" />
                </div>
                <div className="p-3">
                    <h4 className="text-capitalize text-center">{pizzas[pizzaIndex].name}</h4>
                    <p>{pizzas[pizzaIndex].desc}</p>
                    <p className="fw-bolder">Ingredientes:</p>
                    <ul className="text-capitalize list-unstyled">{pizzaIngredients}</ul>
                    <div className="align-items-stretch border-top pt-3">
                        <div><p className="fw-bolder fs-2 lh-1 text-left">Precio: {CLP.format(pizzas[pizzaIndex].price)}
                        </p></div>
                        <div><Button className="button border-0 text-black" type="button" value={pizzas[pizzaIndex].id} onClick={(e) => addToCart(e,'value')}>Añadir 🛒</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PizzaCard
