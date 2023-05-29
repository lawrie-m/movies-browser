<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRouter, onBeforeRouteUpdate, useRoute } from 'vue-router';
import { options } from "../utilities"
import { genres } from '../data';
import Card from "./components/Card.vue"

const route = useRouter().currentRoute
const id = computed(() => route.value.params.id)
const genreName = computed(() => genres.value.find(genre => genre.id == id.value)?.name)

const getGenreMovies = async () => {
  await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres='+id.value, options)
        .then(async response => await response.json())
        .then(jsonData => films.value = jsonData.results)
    .catch(err => console.error(err));
}

const films = ref([])

onMounted(getGenreMovies)
onBeforeRouteUpdate(getGenreMovies)

</script>

<template>
  <div class="text-slate-100">
      <h1 class="text-center text-xl">{{ genreName }}</h1>
      <router-link to="/" >Home</router-link>
       <div class="grid grid-cols-2 text-center justify-items-stretch gap-x-4 gap-y-6">
          <Card v-for="film in films" :key="film.id" :film="film" class="flex flex-column justify-center"/>
       </div>
  </div>
</template>