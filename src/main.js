import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apolloProvider from "@/apollo";
import './index.css'
import firebaseConfig from "../.firebase/firebase";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faAngleDoubleRight, faAngleLeft, faAngleDoubleLeft, faAngleUp, faAngleDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleRight, faAngleDoubleRight, faAngleLeft, faAngleDoubleLeft, faAngleDown, faAngleUp, faTimes)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

createApp(App).use(store).use(router).use(apolloProvider).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
