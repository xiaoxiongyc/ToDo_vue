import Vue from 'vue';
import App from './app.vue';
import Store from 'storejs';

import './assets/styles/global.styl';

// 创建节点
var root = document.createElement('div');
document.body.appendChild(root);

// 将模板插入节点
new Vue({
    render : (h) => h(App)
})
.$mount(root)
