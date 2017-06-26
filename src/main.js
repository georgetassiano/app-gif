// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueClipboard from 'vue-clipboard2'
import * as pagination from 'vuejs-uib-pagination'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './vuex/store'

Vue.use(VueAxios, axios)

Vue.use(VueLodash, lodash)
Vue.use(pagination)
Vue.use(VueClipboard)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
