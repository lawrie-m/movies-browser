<script setup>
import { ref, onMounted } from 'vue';
import { options } from '../utilities';

import Card from './components/Card.vue';

const films = ref([])


const getTopMovies = async () => {
  await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then( async response => await response.json())
    .then(JSONdata => films.value = JSONdata.results)
    .then(JSONdata => console.log(JSONdata))
    .catch(err => console.error(err));
}

onMounted(getTopMovies)

</script>

<template>
  <div>
    <div class="container px-4 py-10  grid grid-cols-3 col-end-8 gap-y-6 gap-x-12 justify-items-stretch text-center">
      <Card v-for="film in films" :key="film.id" :film="film" class="flex flex-column justify-center"/>
      {{ films }}
    </div>
  </div>
</template>

<style scoped>

</style>
