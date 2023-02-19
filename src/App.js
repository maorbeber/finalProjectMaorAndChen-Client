import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import ProductList from "./Pages/ProductList";
import ProductPage from "./Pages/ProductPage";
import Register from "./Pages/Register";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    // <HomePage />
    // <ProductList />
    // <ProductPage/>
    // <Register />
    // <Login />
    // <Cart />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

//finished need to set up back-end
export default App;
