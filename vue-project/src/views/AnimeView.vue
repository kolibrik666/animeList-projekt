
<template>
  <button @click="$router.back()">GO BACK</button>
  <section class="anime">
    <h1>{{anime.name}}</h1>
    <div class="anime-details">
      <img :src="`/images/${anime.image}`" :alt="anime.name">
      <p>{{anime.description}}</p>
    </div>
  </section>

  <section class="characters">
    <h2>Top Characters in {{anime.name}}</h2>
    <div class="cards">
      <router-link
          v-for="character in anime.characters"
          :key="character.slug"
          :to="{ name: 'character.show', params: { characterSlug: character.slug } }"
      >
        <CharacterView :character="character" />
      </router-link>
    </div>
    <router-view />
  </section>
</template>

<script>
import sourceData from '@/dataAnime.json'
import CharacterView from "@/views/CharacterView.vue";

export default {
  components: { CharacterView },
  props: {
    id: { type: Number, required: true }
  },
  computed: {
    anime() {
      return sourceData.animes.find(anime => anime.id === this.id)
    }
  }
}
</script>

