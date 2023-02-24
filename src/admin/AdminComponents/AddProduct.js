import React from "react";
import "../../Pages/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewProduct = () => {
  const navigate = useNavigate();
  const createHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const title = e.target.elements.title.value;
    const desc = e.target.elements.desc.value;
    const image = e.target.elements.image.value;
    const size = e.target.elements.size.value;
    const color = e.target.elements.color.value;
    const price = e.target.elements.price.value;

    try {
      await axios.post(`http://localhost:3001/api/products/create`, {
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
        <h1 className="RegisterTitle">Add new Prodcut</h1>
        <form className="RegisterForm" onSubmit={createHandler}>
          <input
            placeholder="Title"
            name="title"
            className="RegisterInput"
            type={"text"}
            required
          ></input>
          <input
            placeholder="Description"
            name="desc"
            className="RegisterInput"
            type={"text"}
            required
          ></input>
          <input
            placeholder="Image"
            name="image"
            className="RegisterInput"
            type={"text"}
            required
          ></input>
          <input
            placeholder="Size"
            name="size"
            type={"text"}
            className="RegisterInput"
            required
          ></input>
          <input
            placeholder="Color"
            name="color"
            className="RegisterInput"
            type={"text"}
            required
          ></input>
          <input
            placeholder="Price"
            name="price"
            className="RegisterInput"
            type={"number"}
            required
          ></input>
          <button className="RegisterButton">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
