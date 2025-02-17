import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const indexOfCartItem = state?.items?.findIndex(
        (data) => data.id === action.payload.id
      );
      if (indexOfCartItem < 0) {
        state.items.push({ ...action.payload, qty: 1 });
      } else {
        state.items[indexOfCartItem].qty += 1;
      }
    },
    removeItem: (state, action) => {
      let index = state.items.findIndex((data) => data?.id === action.payload);

      state.items.splice(index, 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
    incQty: (state, action) => {
      const indexOfCartItem = state?.items?.findIndex(
        (data) => data.id === action.payload
      );
      state.items[indexOfCartItem].qty += 1;
    },
    decQty: (state, action) => {
      const indexOfCartItem = state?.items?.findIndex(
        (data) => data.id === action.payload
      );
      state.items[indexOfCartItem].qty -= 1;
    },
  },
});

export const { addItem, removeItem, clearCart, decQty, incQty } =
  cartSlice.actions;

export default cartSlice.reducer;
