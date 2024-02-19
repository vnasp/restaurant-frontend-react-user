import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const DataProvider = ({ children }) => {
  const CLP = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' })
  const [pizzas, setPizzas] = useState([])
  const [sideDishes, setSideDishes] = useState([])
  const [beverages, setBeverages] = useState([])
  const [cart, setCart] = useState([])
  const [coupon, setCoupon] = useState('')
  const [showCart, setShowCart] = useState(false)
  const handleCloseCart = () => setShowCart(false)
  const handleShowCart = () => setShowCart(true)
  const [showMenu, setShowMenu] = useState(false)
  const handleCloseMenu = () => setShowMenu(false)
  const handleShowMenu = () => setShowMenu(true)
  const [lastOrder, setLastOrder] = useState(null);
  

  // Popup Registro o Inicio de Sesión
  const handleInscribeClick = (e) => {
    e.preventDefault()
    setShowMenu(false)
    MySwal.fire({
      title: '<h2>Ingresa a Mamma Mia</h2>',
      html: `
        <p class="">Acumula MammaPuntos, revisa tus pedidos y pizzas favoritas.</p>
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

  // Obtener la data de los productos
  const getPizzas = async () => {
    try {
      const response = await fetch("./pizzas.json")
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
      const response = await fetch("./sidedishes.json")
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
      const response = await fetch("./beverages.json")
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

  // Manejo del carrito
  const addToCart = (item) => {
    // Destructura el objeto item para obtener el id y el tipo
    const { id, type } = item;

    // Determina la lista de productos basada en el tipo
    let productList;
    if (type === 'pizza') {
      productList = pizzas;
    } else if (type === 'sidedish') {
      productList = sideDishes;
    } else if (type === 'beverage') {
      productList = beverages;
    }
    const productIndex = productList.findIndex(product => product.id === id);
    const cartIndex = cart.findIndex(cartItem => cartItem.id === id && cartItem.type === type);

    if (cartIndex < 0) {
      // Agrega un nuevo producto al carrito si no está ya en él
      setCart([...cart, {
        ...productList[productIndex],
        qty: 1,
        type, // Incluye el tipo de producto en el carrito
      }]);
    } else {
      // Si el producto ya está en el carrito, solo incrementa la cantidad
      let newCart = [...cart];
      newCart[cartIndex].qty += 1;
      setCart(newCart);
    }
    setShowCart(true)
  }
  let discount
  if (coupon == "tengohambre") {
    discount = 0.9
  }
  else {
    discount = 1
  }
  const cartFilter = cart.filter((item) => item.qty > 0)
  const subtotal = (cartFilter.reduce((accumulator, { qty, price }) => accumulator + (qty * price), 0))
  const total = subtotal * discount
  const discountAmount = subtotal - (discount * subtotal)

  return (
    <DataContext.Provider value={{ pizzas, setPizzas, sideDishes, setSideDishes, beverages, setBeverages, addToCart, cartFilter, cart, setCart, discountAmount, coupon, setCoupon, subtotal, total, CLP, handleInscribeClick, showCart, setShowCart, handleCloseCart, handleShowCart, showMenu, setShowMenu, handleCloseMenu, handleShowMenu,lastOrder, setLastOrder }}>
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider