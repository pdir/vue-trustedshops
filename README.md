# vue-trustedshops

[![npm version](https://badge.fury.io/js/%40pdir%2Fvue-trustedshops.svg)](https://badge.fury.io/js/%40pdir%2Fvue-trustedshops)

Vue plugin for Trustedshops

## Demo

https://codesandbox.io/s/w7z3vr77q8

## Sponsored by

The development is sponsored by [SIGNUU - make it unique](https://signuu.com)

## How-To Use it

### Install

    npm install vue-trustedshops

Start using it in your Vue application

    import Vue from 'vue'
    import Testimonial from '@pdir/vue-trustedshops'

    Vue.use(Testimonial, {
        tsid: 'YOUR-TRUSTEDSHOPS-ID'
    })

OR as Component in Single File

    import Testimonial from './components/Testimonial.vue'

    export default {
      name: 'app',
      components: {
        Testimonial
      }
    }

    <Testimonial tsid="YOUR-TRUSTEDSHOPS-ID">

#### OR as Component in main.js

In your application include the component in main.js

    import "@pdir/vue-trustedshops";
    import "@pdir/vue-trustedshops/dist/vue-trustedshops.css";

and use the component in your template

    <Testimonial tsid="YOUR-TRUSTEDSHOPS-ID"/>

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
