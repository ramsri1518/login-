<template>
  <div id="app">
 <validate/>
  </div>
</template>

<script>
import Validate from './components/validate.vue'

//import Register from './components/register.vue'
//import bus from './components/bus.vue'
// Event from './components/event.vue'



export default{
  components: {   Validate  },
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
