import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/colors.css'
import './assets/styles/buttons.css'
import './assets/styles/inputs.css'
import './assets/styles/table.css'
import './assets/styles/dialogs.css'
import './assets/styles/fonts.css'

const app = createApp(App).use(router)

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
app.use(PrimeVue)

import Button from 'primevue/button'
app.component('Button', Button)
import InputText from 'primevue/inputtext'
app.component('InputText', InputText)
import DataTable from 'primevue/datatable'
app.component('DataTable', DataTable)
import Column from 'primevue/column'
app.component('Column', Column)
import Dialog from 'primevue/dialog'
app.component('Dialog', Dialog)
import Textarea from 'primevue/textarea'
app.component('Textarea', Textarea)

// import firebase from 'firebase'
// /* code from our Firebase console */
// var firebaseConfig = {
//     apiKey: 'AIzaSyAKCT9ProN7To4uLvYFrL4nVezOAkCb5S0',
//     authDomain: 'bootcamp-d0a20.firebaseapp.com',
//     projectId: 'bootcamp-d0a20',
//     storageBucket: 'bootcamp-d0a20.appspot.com',
//     messagingSenderId: '204494318194',
//     appId: '1:204494318194:web:5d7e3bf7bcb7de1b32b0eb',
//     measurementId: 'G-7K5LN6BEW2',
// }

// Initialize Firebase
// firebase.initializeApp(firebaseConfig)

app.mount('#app')


