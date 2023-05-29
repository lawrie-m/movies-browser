import { computed, ref, watch } from 'vue';

const initialValue = localStorage.getItem('watched') ?? "[]";

export const watched = ref(JSON.parse(initialValue));

export default function useWatched(id) {
    const isWatched = computed(() => watched.value.find(value => value === id));
    const toggleWatch = () => {
        if (isWatched.value) {
            watched.value = watched.value.filter(value => value !== id);
            return;
        }

        watched.value = [...watched.value, id];
    }
    watch(
        watched,
        newValue => {
            localStorage.setItem('watched', JSON.stringify(newValue))
        }
    )

    return {
        isWatched,
        watched,
        toggleWatch
    }
}