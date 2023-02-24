import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/HomePageComponents/Footer";
import Navbar from "../Components/HomePageComponents/Navbar";
import Products from "../Components/HomePageComponents/Products";

const AdminPage = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.currentUser);
    
  return (
    <div>
      <Navbar />
      <Products/>
      <Footer/>
    </div>
  );
};

export default AdminPage;
