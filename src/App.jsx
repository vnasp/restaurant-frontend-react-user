import { Route, Routes } from "react-router-dom"
import HomePage from "./views/HomePage"
import CartPage from "./views/CartPage"
import PizzaPage from "./views/PizzaPage"
import NotFound from "./views/NotFound"
import PointsPage from "./views/PointsPage"
import RegisterPage from "./views/RegisterPage"
import ContactPage from "./views/ContactPage"
import StoresPage from "./views/StoresPage"
import HeaderPage from "./components/HeaderPage"
import FooterPage from "./components/FooterPage"
import FoodMenu from "./components/FoodMenu"

const App = () => {
  return (
    <div>
      <HeaderPage />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path="/pizzas"
          element={<FoodMenu />} />
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
          path="/inscribete"
          element={<RegisterPage />}
        />
        <Route
          path="/locales"
          element={<StoresPage />}
        />
        <Route
          path="/pizza/:id"
          element={<PizzaPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <FooterPage />
    </div>

  );
};
export default App