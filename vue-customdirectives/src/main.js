// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .provide('company', 'HCL')
    .directive('focus', (element, binding) => {
        element.focus()
    })
    .directive('highlight', (element, binding) => {
        //reading parameter passed by element using binding
        console.log(binding)
        //set the inital color
        element.style.backgroundColor = binding.value 
        element.addEventListener('mousemove', (evt) => {
            //  element.style.backgroundColor = 'yellow'
            highLight('yellow')
        })
        element.addEventListener('mouseleave', (evt) => {
            //element.style.backgroundColor = null
            highLight(null)
        })
        const highLight = (color) => {
            element.style.backgroundColor = color
        }
    })
    .mount('#app')
