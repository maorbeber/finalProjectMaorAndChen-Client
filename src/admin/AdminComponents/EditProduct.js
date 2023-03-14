import React, { useEffect, useState } from "react";
import "../../Pages/Register.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const EditProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/products/find/${id}`
        );
        setProduct(res.data);
        console.log(product);
      } catch (err) {}
    };
    getProduct();
  }, []);
  const navigate = useNavigate();
  const updateHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const title = e.target.elements.title.value;
    const desc = e.target.elements.desc.value;
    const image = e.target.elements.image.value;
    const size = e.target.elements.size.value;
    const color = e.target.elements.color.value;
    const price = e.target.elements.price.value;

    try {
      await axios.post(`http://localhost:3001/api/products/update`, {
        id: id,
        title: title,
        desc: desc,
        image: image,
        size: size,
        price: price,
        color: color,
      });
      navigate("/admin");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="RegisterContainer">
      <div className="RegisterWrapper">
        <h1 className="RegisterTitle">Update Product</h1>
        <form className="RegisterForm" onSubmit={updateHandler}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              value={product?.title}
              name="title"
              className="RegisterInput"
              type={"text"}
              required
              onChange={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="desc">Description:</label>
            <input
              value={product?.desc}
              name="desc"
              className="RegisterInput"
              type="text"
              required
              onChange={(e) => setProduct({ ...product, desc: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="image">Image:</label>
            <input
              value={product?.image}
              name="image"
              className="RegisterInput"
              type={"text"}
              required
              onChange={(e) =>
                setProduct({ ...product, image: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="size">Size:</label>
            <input
              value={product?.size}
              name="size"
              type={"text"}
              className="RegisterInput"
              required
              onChange={(e) => setProduct({ ...product, size: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="color">Color:</label>
            <input
              value={product?.color}
              name="color"
              className="RegisterInput"
              type={"text"}
              required
              onChange={(e) =>
                setProduct({ ...product, color: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              value={product?.price}
              name="price"
              className="RegisterInput"
              type={"number"}
              required
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>
          <button className="RegisterButton">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
