<template>
  <div>
    <section class="anime">
      <div class="description-container">
        <h1>{{ anime.name }}</h1>
        <div class="anime-details">
          <img :src="`/images/${anime.image}`" :alt="anime.name" class="anime-image">
          <div>
            <h2>Description</h2>
            <p class="anime-description">{{ anime.description }}</p>
          </div>
        </div>
      </div>
      <div class="back-button">
        <BackButton />
        <button @click="toggleSaveStatus">
          {{ isSaved ? 'Unsave' : 'Save' }}
        </button>
      </div>
    </section>

    <section class="characters">
      <h2>Top Characters in {{ anime.name }}</h2>
      <div class="cards">
        <router-link
            v-for="character in anime.characters"
            :key="character.slug"
            :to="{ name: 'character.show', params: { characterSlug: character.slug } }"
            class="character-card"
        >
          <CharacterView :character="character" />
        </router-link>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script>
import sourceData from '@/dataAnime.json'
import CharacterView from "@/views/CharacterView.vue";
import BackButton from '@/components/GoBackButton.vue';
import { useAnimeStore } from '@/stores/animeStore';

export default {
  components: { CharacterView, BackButton },
  props: {
    id: { type: Number, required: true },
  },
  computed: {
    anime() {
      return sourceData.animes.find(anime => anime.id === this.id)
    },
    isSaved() {
      return useAnimeStore().isAnimeSaved(this.id)
    }
  },
  methods: {
    toggleSaveStatus() {
      const store = useAnimeStore();
      if (this.isSaved) {
        store.unsaveAnime(this.id);
      } else {
        store.saveAnime(this.id);
      }
    },
  },
};
</script>

<style scoped>
.anime {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.description-container {
  display: flex;
  flex-direction: column;
}

.anime-details {
  display: flex;
  align-items: flex-start;
}

.anime-image {
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
}

.anime-description {
  font-size: 16px;
  text-align: justify;
}

.character-card {
  text-decoration: none;
  color: inherit;
  background-color: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;
  transition: transform 0.3s ease-in-out;
  flex: 1;
  max-width: 300px;
  margin-right: 15px;

  &:hover {
    transform: scale(1.05);
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.back-button {
  justify-content: flex-end;
}
</style>
