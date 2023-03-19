import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity;
      const product = state.products.find(
        (prod) => prod._id == action.payload._id
      );
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      state.total += action.payload.price * action.payload.quantity;
    },
    emptyCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    decreaseCartItem: (state, action) => {
      state.quantity -= 1;
      const product = state.products.find(
        (prod) => prod._id == action.payload._id
      );
      product.quantity -= 1;
      state.total -= product.price * 1;
      state.products.filter((p) => p.quantity > 0);
    },
    increaseCartItem: (state, action) => {
      state.quantity += 1;
      const product = state.products.find(
        (prod) => prod._id == action.payload._id
      );
      product.quantity += 1;
      state.total += product.price * 1;
    }
  },
});

export const { addProduct, emptyCart, decreaseCartItem,increaseCartItem } = cartSlice.actions;
export default cartSlice.reducer;
