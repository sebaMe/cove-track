import App from './App.vue'
import './index.css'

import { createApp } from 'vue'
import { router } from './router'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faVirus,
  faGlobe,
  faSearch,
  faSync,
  faUsers,
  faChartLine,
  faSkullCrossbones,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faVirus,
  faGlobe,
  faSearch,
  faSync,
  faUsers,
  faChartLine,
  faSkullCrossbones
)

createApp(App)
  .use(router)
  .use(createPinia)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
