<script>
import { RouterView, useRoute } from "vue-router"
import { ref, defineComponent } from "vue"
import Sidebar from "./views/components/Sidebar.vue";
import { sidebarWidth } from "./views/components/state";
import { library } from '@fortawesome/fontawesome-svg-core'

const search = ref("")

export default defineComponent({
  components: { Sidebar },
  setup() {
    return {sidebarWidth}
  }
})

</script>

<template>
  <Sidebar />
  <main class=" min-w-screen bg-slate-900 min-h-screen text-slate-100">
    <div class="">
      <router-link to="/" class="p-8 ml-8 mt-4 text-slate-100 text-xl">Films'r'us</router-link>
        <div>
          <input
            class="py-2 px-5 rounded text-slate-900 flex mx-auto mt-10"
            type="search"
            placeholder="Search Films..."
            v-model.trim="search"
          />
          <router-link class="flex justify-center" :to="{ name: 'search', query: {movie: search} }" >Search</router-link>
        </div>
    </div>
    <Suspense :style="{'margin-left': sidebarWidth}">
        <RouterView />
    </Suspense>
  </main>
</template>

<style scoped>

</style>
