import React, { useEffect, useState } from "react";
import "../../Pages/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ManageAdmins.css";
import { useSelector } from "react-redux";
const AddNewProduct = () => {
  const currUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/auth/getUsers`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const clickHandler = async (action, username) => {
    const state = action == "make" ? true : false;
    try {
      const res = await axios.get(
        `http://localhost:3001/api/auth/update/${username}/${state}`
      );
      const updatedUser = res.data;
      setUsers(
        users.map((user) =>
          user.username === updatedUser.username ? updatedUser : user
        )
      );
    } catch (err) {}
  };
  return (
    <div className="RegisterContainer">
      <div className="RegisterWrapper">
        <ul className="AdminsUl">
          {users.map((user) => (
            <li className="AdminsLi" key={user._id}>
              {user.username}
              {(user.isAdmin && currUser.email != user.email && (
                <button
                  onClick={() => clickHandler("remove", user.username)}
                  className="AdminsRemoveButton"
                >
                  Remove Admin
                </button>
              )) ||
                (!user.isAdmin && currUser.email != user.email && (
                  <button
                    onClick={() => clickHandler("make", user.username)}
                    className="AdminsMakeButton"
                  >
                    Make Admin
                  </button>
                ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddNewProduct;
