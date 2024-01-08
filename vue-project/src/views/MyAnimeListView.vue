<template>
  <div class="home">
    <h1>My Anime List</h1>
    <div class="anime-list">
<!--      <router-link-->
<!--          v-for="animeId in savedAnime"-->
<!--          :key="animeId"-->
<!--          :to="{ name: 'animeShow', params: { id: animeId } }"-->
<!--          class="anime-card"-->
<!--      >-->
<!--        &lt;!&ndash; Display anime information here &ndash;&gt;-->
<!--      </router-link>-->
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useAnimeStore } from '@/stores/animeStore';

export default {
  setup() {
    const animeStore = useAnimeStore();
    const savedAnime = ref([]);

    onMounted(() => {
      savedAnime.value = animeStore.savedAnime;
    });

    return {
      savedAnime,
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
