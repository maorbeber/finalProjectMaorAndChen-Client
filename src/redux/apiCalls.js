import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutUser,
  setAdmin,
} from "./userRedux";
import axios from "axios";
import { emptyCart } from "./cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`http://localhost:3001/api/auth/login`, {
      username: user.username,
      password: user.password,
    });
    if (res.data.error != null) {
      dispatch(loginFailure());
    } else {
      dispatch(loginSuccess(res.data));
    }
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = (dispatch) => {
  dispatch(logoutUser());
  dispatch(emptyCart());
};

export const makeAdmin = async (dispatch, email) => {
  console.log(email)
  try {
    const res = await axios.get(
      `http://localhost:3001/api/auth/setAdmin/${email}`
    );
    dispatch(setAdmin());
  } catch (err) {
    console.log(err);
  }
};
