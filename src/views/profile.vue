<template>
  <div>
    <h1>Profile</h1>

    <router-link :to="{name: 'invoices'}">Invoices</router-link>

    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  methods: {
    logout() {
      store.username = "";
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
button {
  display: block;
  margin: auto;
  margin-top: 20px;
}
</style>