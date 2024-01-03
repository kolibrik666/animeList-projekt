

<!--  <template>-->
<!--    <button @click="$router.back()">GO BACK</button>-->
<!--    <section class="destination">-->
<!--      <h1>{{destination.name}}</h1>-->
<!--      <div class="destination-details">-->
<!--        <img :src="`/images/${destination.image}`" :alt="destination.name">-->
<!--        <p>{{destination.description}}</p>-->
<!--      </div>-->
<!--    </section>-->

<!--    <section class="experiences">-->
<!--      <h2>Top Experiences in {{destination.name}}</h2>-->
<!--      <div class ="cards">-->
<!--        <router-link-->
<!--            v-for="experience in destination.experiences"-->
<!--            :key="experience.slug"-->
<!--            :to="{name: 'experience.show', params:{experienceSlug: experience.slug}}"-->
<!--        >-->
<!--          <ExperienceView-->
<!--              :experience="experience"-->
<!--          />-->
<!--        </router-link>-->
<!--      </div>-->
<!--      <router-view />-->

<!--    </section>-->

<!--  </template>-->
<!--  <script>-->
<!--    import sourceData from '@/data.json'-->
<!--    import ExperienceView from "@/views/ExperienceView.vue";-->
<!--    export default {-->
<!--      components:{ExperienceView},-->
<!--      props:{-->
<!--        id: {type: Number, required: true}-->
<!--      },-->
<!--      computed:{-->
<!--        destination(){-->
<!--          return sourceData.destinations.find(destination => destination.id === this.id)-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  </script>-->

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
import sourceData from '@/animeData.json'
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

