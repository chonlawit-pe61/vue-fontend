import { createApp } from 'vue'
import App from './App.vue'
import './index.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret, fas, far, fab)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
