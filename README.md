# Vuex Cheatsheet

## Summary

At the component level, only **_actions_** and **_getter_** are exposed for use and these two are accessed inside **_methods_** and **_computed_** blocks respectively. To reduce the complexity of this process, Vuex provides two built-in helpers that can be used:

1. **_mapActions_**
2. **_mapGetters_**

## Life Cycle

![The diagram of vuex life cycle](/public/vuex-life-cycle.png)

## Register Store

```
// main.js
import { createApp } from 'vue';
import store from './store/index.js';
const app = createApp(App);
app.use(store);
app.mount('#app');
```

## Application Structure

```
├── index.html
├── main.js
├── api
│   └── ... # abstractions for making API requests
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # where we assemble modules and export the store
    ├── actions.js        # root actions
    ├── mutations.js      # root mutations
    └── modules
        ├── cart.js       # cart module
        └── products.js   # products module
```
