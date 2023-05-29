<script>
import { defineComponent, ref, onMounted } from 'vue';
import SidebarLink from './SidebarLink.vue';
import { collapsed, toggleSidebar, sidebarWidth } from './state';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getGenres } from "../../utilities";
import { genres } from '../../data';


export default defineComponent({
    props: {},
    components: { SidebarLink, SidebarLink, FontAwesomeIcon, SidebarLink },
    setup() {
        onMounted( async () => getGenres())
        console.log(genres)
        return {collapsed, toggleSidebar, sidebarWidth, genres}
    }
})
</script>

<template>
    <div class="sidebar" :style="{width: sidebarWidth}">
        <h1>
            <span v-if="collapsed" class="font-bold text-xl">
                <FontAwesomeIcon icon="fa-film" class="sidebar-header"/>
            </span>
            
            <span v-else class="font-bold text-xl">
                <FontAwesomeIcon icon="fa-film" class="sidebar-header"/>
                Films'r'us
            </span>
        </h1>

        <SidebarLink to="/" icon="fa-home" >Home</SidebarLink>
        <SidebarLink to="/profile" icon="fa-user" >Profile</SidebarLink>

        <div class="" v-if="!collapsed">
            <h1 class="mx-3 mt-6 mb-2 text-center font-bold">Genres</h1>

            <SidebarLink :to="`/genre/${genre.id}`" v-for="genre in genres" :key="genre.id">{{ genre.name }}</SidebarLink>
        </div>
        
        
        <span
        class="collapse-icon"
        :class="{'rotate-180': collapsed}"
        @click="toggleSidebar"
        >
            <FontAwesomeIcon icon="fa-angles-left" class="fa-angles-left" />
        </span>
    </div>
</template>

<style>
:root {
    --sidebar-bg-color: #2f855a;
    --sidebar-item-hover: #38a169;
    --sidebar-bg-active: #276749;
}
</style>

<style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;


    transition: 0.3S ease;

    display: flex;
    flex-direction: column;
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);

    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}

.sidebar .sidebar-header {
    margin-left: 8px;
    margin-right: 10px;
}

.sidebar h1 {
        margin-bottom: 20px;
}

</style>