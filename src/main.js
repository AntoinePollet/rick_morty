import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apolloProvider from "@/apollo";
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faAngleDoubleRight, faAngleLeft, faAngleDoubleLeft, faAngleUp, faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleRight, faAngleDoubleRight, faAngleLeft, faAngleDoubleLeft, faAngleDown, faAngleUp, faTimes)



createApp(App).use(store).use(router).use(apolloProvider).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
