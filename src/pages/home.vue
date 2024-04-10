<template>
  <h1>Essa é minha página de home</h1>
  <router-link to="/login">Login</router-link>
  <br />
  <router-link to="/dashboard">Dashboard</router-link>
</template>

<script>
import Login from "../components/Login.vue";
import dashboard from "./master/dashboard.vue";
export default {
  components: {
    Login,
    dashboard,
  },
};
</script>