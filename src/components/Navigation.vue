<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/panama">Panama</router-link>
    <router-link to="/hawaii">Hawaii</router-link>
    <router-link to="/jamaica">Jamaica</router-link>


    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.name" class="links">
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { id: destination.id }
          }"
        >{{ destination.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>
#nav {
  display: flex;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

#nav a.rename-active-class {
  color: #42b983;
}

.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>