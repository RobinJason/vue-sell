// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource); // 注册

/* const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' }; */

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes // （缩写）相当于 routes: routes
});

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>',
  router
}).$mount('#app');
/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
*/
router.push('/goods');
