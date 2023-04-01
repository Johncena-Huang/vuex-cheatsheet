export default {
  incrementItemQuantity(state, index) {
    state.cart.items[index].qty++;
  },
  incrementCartQuantityAndTotal(state, total) {
    state.cart.qty++;
    state.cart.total += total;
  },
  decrementCartQuantityAndTotal(state, itemData) {
    state.cart.qty -= itemData.qty;
    state.cart.total -= itemData.qty * itemData.price;
  },
  appendItemToCart(state, newItem) {
    state.cart.items.push(newItem);
  },
  removeItemFromCart(state, itemIndex) {
    state.cart.items.splice(itemIndex, 1);
  },
};
