import sovetButton from '@/components/ui/sovetButton.vue'
import sovetInput from '@/components/ui/sovetInput.vue'
import Vue from 'vue'

const components = { sovetButton, sovetInput }
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
