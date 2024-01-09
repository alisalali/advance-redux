import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  showCart: false,
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showCart: (state) => {
      state.showCart = !state.showCart;
    },
    addItemsToCart: (state, actions) => {
      const newItem = actions.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
