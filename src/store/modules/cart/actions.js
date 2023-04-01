export default {
  addToCart(ctx, product) {
    console.log('addToCart', ctx);
    const productInCartIndex = ctx.state.cart.items.findIndex(
      (item) => item.productId === product.id
    );
    if (productInCartIndex >= 0) {
      ctx.commit('incrementItemQuantity', productInCartIndex);
    } else {
      const itemToAppend = {
        productId: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        qty: 1,
      };
      ctx.commit('appendItemToCart', itemToAppend);
    }
    ctx.commit('incrementCartQuantityAndTotal', product.price);
  },
  removeFromCart(ctx, itemId) {
    const productInCartIndex = ctx.state.cart.items.findIndex(
      (cartItem) => cartItem.productId === itemId
    );
    const productData = ctx.state.cart.items[productInCartIndex];
    ctx.commit('removeItemFromCart', productInCartIndex);
    ctx.commit('decrementCartQuantityAndTotal', productData);
  },
};
