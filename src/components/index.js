import Vue from 'vue'
import Testimonial from './Testimonial.vue'

const Components = {
    Testimonial
}

Object.keys(Components).forEach( name => {
    Vue.component(name, Components[name])
})