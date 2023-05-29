<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { options } from '../utilities';


const id = useRouter().currentRoute.value.params.id

console.log(id)

const film = ref({})
const credits = ref({})

// Films
fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  .then(response => response.json())
  .then(response => film.value = response)
  .then(console.log)
    .catch(err => console.error(err));

// Cast
fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
  .then(response => response.json())
  .then(response => credits.value = response)
  .then(console.log)
  .catch(err => console.error(err));

</script>

<template>
    <div class="flex justify-center">
    <div class="header-div flex justify-center w-3/4 m-6 ">
        <img :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" alt="image" class="w-full h-auto"/>
        <div class="text-slate-100 mx-6 my-3">
            <h1 class="mt-0">{{ film.title }} ({{ film.release_date?.slice(0,-6) }})</h1>
            <p>{{ film.release_date }}(US)</p>
            
            <p>Reviews: {{ Math.trunc(parseInt(film.vote_average)) }}/10</p>
            <h4 class="mt-6">Overview</h4>
            <p>{{ film.overview }}</p>
        </div>
    </div>
    </div>
    <div class="text-center">
      <p>Cast</p>
      <p v-for="cast in credits.cast" :key="cast.name">{{ cast.name }}</p>
    </div>

</template>

<style scoped>
.header-div{
    background-image: url(`https://image.tmdb.org/t/p/w500${film.poster_path}`);
}

</style>