import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product";
import axios from "axios";

const Products = (filters, sort) => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/products/");
      setProducts(res.data);
    } catch (err) {}
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const getFilteredProducts = async () => {
      try {
        const color =
          filters.filters.color == "All" ? "" : filters.filters.color || "";
        const colorQuery = color.toLowerCase();
        const size =
          filters.filters.size == "All" ? "" : filters.filters.size || "";
        const sort = filters.sort || "";
        const res = await axios.get(
          `http://localhost:3001/api/products/filters?color=${colorQuery}&size=${size}&sort=${sort}`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(`error is: ${err}`);
      }
    };
    getFilteredProducts();
  }, [filters, sort]);

  const handleDelete = async (productId) => {
    getProducts();
  };

  return (
    <div className="ProductsContainer">
      {products.map((item) => (
        <Product
          item={item}
          key={item._id}
          onDelete={() => handleDelete(item._id)}
        />
      ))}
    </div>
  );
};

export default Products;

//28.28 getting the products from the mongo
// https://www.youtube.com/watch?v=y66RgYMAgSo&list=PLj-4DlPRT48mxPG8TAXOH4qqQ1ijuERO4&index=3
