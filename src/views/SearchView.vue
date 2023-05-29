<script setup>
import { useRouter } from 'vue-router';
import { ref, watch } from "vue"
import { runSearch } from '../utilities';
import Card from "./components/Card.vue"

const route = useRouter().currentRoute
const films = ref([])

watch(route, async newRoute => {
    films.value = await runSearch(newRoute.query.movie)
    console.log(films.value)
},
    {immediate: true}
)

</script>


<template>
    <div class="text-slate-100 grid grid-cols-2 text-center justify-items-stretch gap-x-4 gap-y-6">
        <Card v-for="film in films" :key="film.id" :film="film" />
    </div>
</template>