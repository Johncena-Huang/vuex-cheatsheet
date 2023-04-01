export default {
  getCartItems(state) {
    return state.cart.items;
  },
  getCartTotal(state) {
    return state.cart.total.toFixed(2);
  },
  getCartItemCount(state) {
    return state.cart.qty;
  },
};
