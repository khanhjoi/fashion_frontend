import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex';

const store = createStore({
  state () {
    return {
      check_token: ""
    }
  },
  mutations: {
    getToken (state, token) {
      state.token = token;
    }
  }
})
const token = localStorage.getItem("firsLogin");
router.beforeEach((to, from, next) => {
  store.commit("getToken", token);
  next();
})

createApp(App).use(store).use(router).mount('#app')
