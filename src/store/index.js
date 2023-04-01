import { createStore } from 'vuex';
import cartModule from './modules/cart';
import productModule from './modules/product';
const store = createStore({
  modules: {
    cart: cartModule,
    product: productModule,
  },
  // Root state
  state() {
    return {
      isLoggedIn: false,
    };
  },
  // Root mutations
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  // Root actions
  actions: {
    login(ctx) {
      ctx.commit('setAuth', { isAuth: true });
    },
    logout(ctx) {
      ctx.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
