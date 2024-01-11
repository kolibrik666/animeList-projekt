<template>
  <div class="home">
    <h1>My Anime List</h1>
    <div class="anime-list">
      <AnimeCard v-for="anime in filteredAnime" :key="anime.id" :anime="anime" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useAnimeStore } from '@/stores/animeStore';
import animeData from '../dataAnime.json';
import AnimeCard from "@/components/AnimeCard.vue";

export default {
  components: {AnimeCard},
  setup() {
    const animeStore = useAnimeStore();
    const savedAnime = ref([]);
    const filteredAnime = ref([]);

    onMounted(() => {
      savedAnime.value = animeStore.getSavedAnime();
      filteredAnime.value = animeData.animes.filter(anime => savedAnime.value.includes(anime.id));
    });

    return {
      filteredAnime,
    };
  },
};
</script>

<style scoped>
.home {
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

.anime-list {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
}

</style>
