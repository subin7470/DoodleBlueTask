import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  itemsInCart: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const {item} = action.payload;
      const existingItem = state.itemsInCart.find(
        cartItem => cartItem.id === item.id,
      );
      if (existingItem) {
        if (existingItem.quantity == existingItem.stock) {
          // alert('Stock meet');
        } else {
          existingItem.quantity += 1;
        }
      } else {
        state.itemsInCart.push({...item, quantity: 1});
      }
    },
    decrementQuantity: (state, action) => {
      const {item} = action.payload;
      const findFood = state.itemsInCart.find(
        cartItem => cartItem.id === item.id,
      );
      if (findFood?.quantity > 1) {
        findFood.quantity -= 1;
      } else {
        const findIndex = state.itemsInCart.findIndex(
          cartItem => cartItem.id === item.id,
        );
        state.itemsInCart.splice(findIndex, 1);
      }
    },
  },
});

export const {addProductToCart, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;
