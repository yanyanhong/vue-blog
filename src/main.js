import Vue from 'vue'

import App from './App.vue'
import store from './store/index'
import router from './router/index'
import VueWorker from 'vue-worker';
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'

Vue.config.productionTip = true
console.log(Vue.version)
// Vue.config.performance = true
import {Promised} from 'vue-promised'
Vue.component('Promised',Promised);
Vue.component('v-chart', ECharts)
Vue.use(VueWorker);
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
