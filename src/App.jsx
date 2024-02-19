import { Route, Routes } from "react-router-dom"
import HomePage from "./views/HomePage"
import CartPage from "./views/CartPage"
import PizzaPage from "./views/PizzaPage"
import NotFound from "./views/NotFound"
import PointsPage from "./views/PointsPage"
import ContactPage from "./views/ContactPage"
import StoresPage from "./views/StoresPage"
import MenuPage from "./views/MenuPage"
import ConfirmationPage from "./views/ConfirmationPage"
import Navigation from "./components/Navigation"
import FooterPage from "./components/FooterPage"

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
          element={<MenuPage />} />
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
          path="/confirmacion"
          element={<ConfirmationPage />}
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
      <FooterPage />
    </div>

  );
};
export default App