<script setup>
import { favourites } from "../composables/useFavourites"
import { watched } from "../composables/useWatched"
import { ref } from "vue";
import Card from "./components/Card.vue";
import { options } from "../utilities";

const films = ref([])
const wfilms = ref([])

const runList = () => Promise.all(favourites.value.map(id =>
fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(response => response.json())
    .then(data => films.value.push(data))
  .catch(err => console.error(err))
))

console.log(favourites.value[1])
console.log(runList())

const runWList = () => Promise.all(watched.value.map(id =>
fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(response => response.json())
    .then(data => wfilms.value.push(data))
  .catch(err => console.error(err))
))
console.log(runWList())

</script>

<template>
  <h1 class="text-center mt-4">Favourites</h1>
    <div class="container px-4 py-10  grid grid-cols-3 col-end-8 gap-y-6 gap-x-12 justify-items-stretch text-center">
        
        <Card v-for="film in films" :key="film.id" :film="film" class="flex flex-column justify-center"/>   
    </div>
    <h1 class="text-center mt-4">Watched</h1>
    <div class="container px-4 py-10  grid grid-cols-3 col-end-8 gap-y-6 gap-x-12 justify-items-stretch text-center">
        
        <Card v-for="wfilm in wfilms" :key="wfilm.id" :film="wfilm" class="flex flex-column justify-center"/>   
    </div>
</template>