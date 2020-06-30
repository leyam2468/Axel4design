import Vue from 'vue'

Vue.directive('font', {
    bind(el, binding) {
        el.style.fontSize = binding.value + 'px'
    }
})
