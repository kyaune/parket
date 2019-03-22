import Vue from 'vue'
import Page from '~/components/Page.vue'
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheCallback from '@/components/TheCallback/TheCallback.vue'
import TheProjects from '@/components/TheProjects/TheProjects.vue'
import TheFloorCoverings from '@/components/TheFloorCoverings/TheFloorCoverings.vue'
import TheContacts from '@/components/TheContacts/TheContacts.vue'
import TheFooter from '@/components/TheFooter/TheFooter.vue'
import TheMap from '@/components/TheMap/TheMap.vue'

Vue.component('page', Page)
Vue.component('header', TheHeader)
Vue.component('callback', TheCallback)
Vue.component('projects', TheProjects)
Vue.component('coverings', TheFloorCoverings)
Vue.component('contacts', TheContacts)
Vue.component('grid', TheFooter)
Vue.component('feature', TheMap)