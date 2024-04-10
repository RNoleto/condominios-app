<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Login from "./components/Login.vue";
export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smothing: antialiased;
  -moz-osz-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>