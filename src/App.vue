<template>
  <div id="app">

      <img alt="Vue logo" src="./assets/logo.png">

      <h1>Trustedshops</h1>

      <h2>Testimonial</h2>
      <div class="examples">
        <Testimonial tsid="X5AE6434ACFAA06AA080692C7A9F63301"/>
      </div>
  </div>
</template>

<script>
import Testimonial from './components/Testimonial.vue'

export default {
  name: 'app',
  components: {
    Testimonial
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.examples {
    margin: auto;
    width: 400px;
}
</style>
