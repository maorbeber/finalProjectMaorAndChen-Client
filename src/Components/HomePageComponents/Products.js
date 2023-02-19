import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product";
import axios from "axios";

const Products = (filters, sort) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/products/");
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [filters]);

  return (
    <div className="ProductsContainer">
      {products.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Products;

//28.28 getting the products from the mongo
// https://www.youtube.com/watch?v=y66RgYMAgSo&list=PLj-4DlPRT48mxPG8TAXOH4qqQ1ijuERO4&index=3