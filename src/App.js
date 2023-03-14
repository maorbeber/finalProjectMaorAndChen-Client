import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import ProductList from "./Pages/ProductList";
import ProductPage from "./Pages/ProductPage";
import Register from "./Pages/Register";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminPage from "./Pages/AdminPage";
import AddProduct from "./admin/AdminComponents/AddProduct";
import EditProduct from "./admin/AdminComponents/EditProduct";
import ManageAdmins from "./admin/AdminComponents/ManageAdmins";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/addProduct" element={<AddProduct />} />
        <Route exact path="/EditProduct/:id" element={<EditProduct />} />
        <Route exact path="/manageAdmins" element={<ManageAdmins />} />
        <Route exact path="/product/:id" element={<ProductPage />} />
        <Route exact path="/cart" element={<Cart />} />
        {user ? (
          <Route path="/login" element={<Navigate to="/" />} />
        ) : (
          <Route exact path="/login" element={<Login />} />
        )}
        {user ? (
          <Route path="/register" element={<Navigate to="/" />} />
        ) : (
          <Route exact path="/register" element={<Register />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

//finished need to set up back-end
export default App;
