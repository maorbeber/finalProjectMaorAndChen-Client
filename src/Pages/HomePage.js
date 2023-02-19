import React from "react";
import Announcements from "../Components/HomePageComponents/Announcements";
import Categories from "../Components/HomePageComponents/Categories";
import Footer from "../Components/HomePageComponents/Footer";
import Navbar from "../Components/HomePageComponents/Navbar";
import NewsLetter from "../Components/HomePageComponents/NewsLetter";
import Products from "../Components/HomePageComponents/Products";
import Slider from "../Components/HomePageComponents/Slider";

const HomePage = () => {
  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
};

export default HomePage;
