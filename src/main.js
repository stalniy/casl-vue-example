import Vue from 'vue';
import App from './App';
import router from './router';
import { abilitiesPlugin } from './config/ability'

Vue.config.productionTip = false;
Vue.use(abilitiesPlugin)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
