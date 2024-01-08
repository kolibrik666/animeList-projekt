<template>
  <button class="back-button" @click="goBack">GO BACK</button>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
button.back-button {
  background-color: #2c50a1;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

button.back-button:hover {
  background-color: #3c5ba6;
}
</style>
