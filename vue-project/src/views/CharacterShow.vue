<template>
  <section class="character-details">
    <h1>{{ character.name }}</h1>
    <div class="details-container">
      <img :src="`/images/${character.image}`" :alt="character.name" class="character-image">
      <div class="description-container">
        <h2>Description</h2>
        <p class="character-description">{{ character.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import jsonData from '@/dataAnime.json';

export default {
  props: {
    id: { type: Number, required: true },
    characterSlug: { type: String, required: true }
  },
  computed: {
    anime() {
      return jsonData.animes.find(anime => anime.id === this.id);
    },
    character() {
      return this.anime.characters.find(character => character.slug === this.characterSlug);
    }
  }
};
</script>

<style scoped>
.character-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.details-container {
  display: flex;
  align-items: flex-start;
}

.character-image {
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
}

.description-container {
  flex: 1;
}

.character-description {
  font-size: 16px;
  text-align: justify;
}
</style>