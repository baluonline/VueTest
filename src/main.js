import Vue from 'vue'
import App from './App.vue';
import store from './store';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false
Vue.use(Vuetify);
// Vue.use(VueRouter);

new Vue({
  store,
  render: h => h(App),
  vuetify: new Vuetify()
}).$mount('#app');

