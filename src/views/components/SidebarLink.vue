<script>
import { computed, defineComponent } from "vue"
import { useRoute } from "vue-router";
import { collapsed } from "./state";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
    components: {
        FontAwesomeIcon
    } ,
    props: {
        to: { type: String, required: true },
        icon: {type: String, default: ""}
    },
    setup(props) {
        const route = useRoute()
        const isActive = computed(() => route.path === props.to)
        return {isActive, collapsed}
    }
})
</script>

<template>
    <router-link :to="to" class="link" :class="{active: isActive}">
        <font-awesome-icon v-if="icon" class="icon" :icon="icon" />
        <transition name="fade">
            <span v-if="!collapsed">
                <slot />
            </span>
        </transition>
    </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.link {
    display: flex;
    align-items: center;

    cursor: pointer;
    position: relative;
    font-weight: 400;
    user-select: none;

    margin: 0.1s 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;

    color: white;
    text-decoration: none;
}

.link:hover {
    background-color: var(--sidebar-item-hover);
}

.link:active {
    background-color: var(--sidebar-item-active);
}

.link .icon {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}
</style>