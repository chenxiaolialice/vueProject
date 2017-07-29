
import Vue from 'vue'
import app from './App.vue'
import router from './router'
import  VueResource  from "vue-resource"

import './commont/stylus/index.styl'

import "./mock/mockServer"

/* eslint-disable no-new */

Vue.use(VueResource)

new Vue({
  el:'#app',
  render: h=>h(app),
  router
})
