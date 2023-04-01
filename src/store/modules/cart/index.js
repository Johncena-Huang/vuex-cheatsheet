import cartActions from './actions';
import cartMutations from './mutations';
import cartGetters from './getters';

export default {
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  actions: cartActions,
  mutations: cartMutations,
  getters: cartGetters,
};
