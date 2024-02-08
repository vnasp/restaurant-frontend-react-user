import { HashRouter as Route, Routes } from 'react-router-dom';
import HomePage from "./views/HomePage"
import CartPage from "./views/CartPage"
import PizzaPage from "./views/PizzaPage"
import NotFound from "./views/NotFound"
import HeaderPage from "./views/HeaderPage"
import FooterPage from "./components/FooterPage"
import FoodMenu from "./components/FoodMenu"


const App = () => {
  return (
    <div>
      <HeaderPage/>
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
          path="/pizza/:id"
          element={<PizzaPage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <FooterPage/>
    </div>

  );
};
export default App