<template>

  <section>
    <h1>{{character.name}}</h1>
    <img :src="`/images/${character.image}`" :alt="character.name">
    <p>{{character.description}}</p>
  </section>
</template>

<script>
import  jsonData from '@/dataAnime.json'
export  default {
  props:{
    id: {type: Number, required: true,},
    characterSlug: {type: String, required: true,}
  },
  computed:{
    anime(){
      return jsonData.animes.find(anime => anime.id === this.id)
    },
    character(){
      return this.anime.characters.find(character => character.slug === this.characterSlug)
    }
  }
}

</script>