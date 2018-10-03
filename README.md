# vue-trustedshops

Vue plugin for Trustedshops

## How-To Use it

### Install

    npm install vue-trustedshops

Start using it your Vue application

    import Vue from 'vue'
    import Testimonial from 'vue-trustedshops'

    Vue.use(Testimonial, {
        tsid: 'YOUR-TRUSTEDSHOPS-ID'
    })

OR as Component in Template

    import Testimonial from './components/Testimonial.vue'

    export default {
      name: 'app',
      components: {
        Testimonial
      }
    }

    <Testimonial tsid="YOUR-TRUSTEDSHOPS-ID">


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```
