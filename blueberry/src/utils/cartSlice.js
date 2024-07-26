import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    // removeItem: (state, action) => {
    //   state.items.pop();
    // },
    removeItem(state, action) {
      const itemIndex = current(state.items).findIndex(
        (item) => item.id === action.payload.id
      );
      state.items.splice(itemIndex, 1);
      state.items = state.items;
    },
    clearCart: (state) => {
      return { items: [] };
    },
  },
  // reducers: {
  //   addItem: (state, action) => {
  //     const itemIndex = state.items.findIndex(
  //       (item) => item.id === action.payload.id
  //     );

  //     if (itemIndex > -1) {
  //       state.items[itemIndex].quantity += 1;
  //     } else {
  //       state.items.push({ ...action.payload, quantity: 1 });
  //     }
  //   },
  //   removeItem: (state, action) => {
  //     const itemIndex = state.items.findIndex(
  //       (item) => item.id === action.payload.id
  //     );
  //     if (itemIndex > -1) {
  //       if (state.items[itemIndex].quantity > 1) {
  //         state.items[itemIndex].quantity -= 1;
  //       } else {
  //         state.items.splice(itemIndex, 1);
  //       }
  //     }
  //   },
  //   clearCart: (state) => {
  //     return { items: [] };
  //   },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
