
<template>
  <div class="card">
    <img :src="`/images/${character.image}`" :alt="character.name">
    <span class="card__text">
      {{character.name}}
    </span>
  </div>
</template>

<script>
export default {
  props:{
    character:{type: Object, required: true,}
  }
}

</script>

<style scoped>
.card {
  position: relative;
  width: 100%;
  max-width: 300px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card__text {
  display: block;
  padding: 10px;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
}

/* Add additional styling as needed */
</style>
