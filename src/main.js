import Vue from 'vue';
import App from './App';
import router from './router';
import ability from './config/ability'
import abilitiesPlugin from './config/ability-plugin'

Vue.config.productionTip = false
Vue.use(abilitiesPlugin, ability)

// TODO: the next line is added for debugging purposes and should be removed for production build
window.ability = ability

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
