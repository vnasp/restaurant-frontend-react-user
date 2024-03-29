import { useContext } from "react"
import { Container } from "react-bootstrap"
import { DataContext } from "../context/DataContext"
import CartDetail from "../components/CartDetail"
import CartEmpty from "../components/CartEmpty"

const CartPage = () => {
  const { cartFilter } = useContext(DataContext)
  const isCart = cartFilter.length > 0

  return (
    <>
      {isCart ? <CartDetail /> : <CartEmpty />}
    </>
  )
}

export default CartPage