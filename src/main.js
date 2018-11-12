import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app';
import './registerServiceWorker'

Vue.config.productionTip = false

const config = {
  apiKey:            'AIzaSyAJtItpmLjGd-EEb8r_wnBHFF-9_wuH3aA',
  authDomain:        'hakusan-quiz.firebaseapp.com',
  databaseURL:       'https://hakusan-quiz.firebaseio.com',
  projectId:         'hakusan-quiz',
  storageBucket:     'hakusan-quiz.appspot.com',
  messagingSenderId: '312104962247',
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')