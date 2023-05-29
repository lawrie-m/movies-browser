<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import useFavourites from '../../composables/useFavourites';
import useWatched from '../../composables/useWatched'

const props = defineProps({
    film: {required: true}
})
const { toggleFavourite, isFavourite } = useFavourites(props.film.id);
const { toggleWatch, isWatched } = useWatched(props.film.id);

</script>

<template>
  <div class="w-full flex flex-col text-slate-100 bg-slate-700 py-10 rounded shadow" >
          <router-link 
            :to="`/film/${film.id}`"
          >
            <img :src="`https://image.tmdb.org/t/p/w500${film.poster_path}`" alt="image" class="w-1/2 mx-auto">
            <p>{{ film.title }}</p>
            </router-link>
            <div class="mt-4">
              
              <p>{{ film.release_date }}</p>
              <p>Reviews: {{ Math.trunc(parseInt(film.vote_average)) }}/10</p>
              <FontAwesomeIcon class="mx-2 hover:text-amber-400" :class=" [ isFavourite ? 'text-amber-400' : 'text-white' ]" icon="fa-star" @click="toggleFavourite" />
              <FontAwesomeIcon class="mx-2 hover:text-amber-400" :class=" [ isWatched ? 'text-amber-400' : 'text-white' ]" icon="fa-eye" @click="toggleWatch"/>
            </div>
          
  </div>
</template>