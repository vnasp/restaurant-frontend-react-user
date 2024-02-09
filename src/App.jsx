import { Route, Routes } from "react-router-dom"
import HomePage from "./views/HomePage"
import CartPage from "./views/CartPage"
import PizzaPage from "./views/PizzaPage"
import NotFound from "./views/NotFound"
import PointsPage from "./views/PointsPage"
import ContactPage from "./views/ContactPage"
import StoresPage from "./views/StoresPage"
import Navigation from "./components/Navigation"
import FooterPage from "./components/FooterPage"
import FoodMenu from "./components/FoodMenu"
import OrderPage from "./views/OrderPage"

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/menu"
          element={<FoodMenu />} />
        <Route
          path="/pedir"
          element={<OrderPage />} />
        <Route
          path="/carrito"
          element={<CartPage />}
        />
        <Route
          path="/puntos"
          element={<PointsPage />}
        />
        <Route
          path="/contacto"
          element={<ContactPage />}
        />
        <Route
          path="/locales"
          element={<StoresPage />}
        />
        <Route
          path="/pizzas/:pizzaId"
          element={<PizzaPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <FooterPage className="mt-4"/>
    </div>

  );
};
export default App