import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const CLP = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' })
  const [pizzas, setPizzas] = useState([])
  const [sideDishes, setSideDishes] = useState([])
  const [beverages, setBeverages] = useState([])

  const [cart, setCart] = useState([])
  const [coupon, setCoupon] = useState('')


  const getPizzas = async () => {
    try {
      const response = await fetch("/pizzas.json")
      if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setPizzas(data)
    } catch (error) {
      console.error("Error fetching data: ", error)
      alert("Error fetching data: " + error.message)
    }
  }
  useEffect(() => {
    getPizzas()
  }, [])

  const getSideDishes = async () => {
    try {
      const response = await fetch("/sidedishes.json")
      if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setSideDishes(data)
    } catch (error) {
      console.error("Error fetching data: ", error)
      alert("Error fetching data: " + error.message)
    }
  }
  useEffect(() => {
    getSideDishes()
  }, [])

  const getBeverages = async () => {
    try {
      const response = await fetch("/beverages.json")
      if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setBeverages(data)
    } catch (error) {
      console.error("Error fetching data: ", error)
      alert("Error fetching data: " + error.message)
    }
  }
  useEffect(() => {
    getBeverages()
  }, [])



  const addToCart = (e) => {
    const pizzaIndex = pizzas.findIndex(pizza => {
      return pizza.id === e.target.value
    })
    const cartIndex = cart.findIndex(cartpizza => {
      return cartpizza.id === e.target.value
    })

    if (cartIndex < 0) {
      setCart([...cart, {
        id: pizzas[pizzaIndex].id,
        img: pizzas[pizzaIndex].img,
        name: pizzas[pizzaIndex].name,
        price: pizzas[pizzaIndex].price,
        qty: 1,
      }])
    }
    else {
      cart[cartIndex].qty += 1
      setCart([...cart])
    }

  }

  const cartFilter = cart.filter((item) => item.qty > 0)

  let discount
  if (coupon == "tengohambre") {
    discount = 0.9
  }
  else {
    discount = 1
  }

  const total = (cartFilter.reduce((accumulator, { qty, price }) => accumulator + (qty * price), 0)) * discount

  return (
    <DataContext.Provider value={{ pizzas, setPizzas, sideDishes, setSideDishes, beverages, setBeverages, addToCart, cartFilter, cart, setCart, coupon, setCoupon, total, CLP }}>
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider