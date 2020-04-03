<template>
  <span>
    <button @click="back">Back</button>
  </span>
</template>

<script>
export default {
  methods: {
    back() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
span {
  display: flex;
  align-items: center;
}

button {
  margin-right: 40px;
  padding: 5px;
}

button:hover {
  cursor: pointer;
}
</style>