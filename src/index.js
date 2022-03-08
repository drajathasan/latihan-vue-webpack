import { createApp } from 'vue/dist/vue.esm-bundler'
import User from './sectiond/User.vue';

createApp({
  components: {
    User
  },
  data() {
    return {
      count: 0,
      say: 'Hello'
    }
  }
}).mount('#app')

createApp({
  data() {
    return {
      myName: 'Drajat'
    }
  }
}).mount('#apptwo')