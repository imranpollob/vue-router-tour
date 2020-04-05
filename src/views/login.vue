<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="username">Username</label>
        <input type="text" name="username" v-model="username" />
      </div>

      <div>
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" />
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.username.length) {
        store.username = this.username;
        this.$router.push("/profile");
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
label {
  padding-right: 15px;
}
button {
  margin-top: 20px;
  max-width: 100px;
}
</style>