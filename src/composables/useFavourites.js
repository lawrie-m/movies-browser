import { computed, ref, watch } from 'vue';

const initialValue = localStorage.getItem('favourites') ?? "[]";
    /**
     * list of movie ids that are favourites
     */
export const favourites = ref(JSON.parse(initialValue));

export default function useFavourites(id) {
    const isFavourite = computed(() => favourites.value.find(value => value === id));
    const toggleFavourite = () => {
        if (isFavourite.value) {
            favourites.value = favourites.value.filter(value => value !== id);
            return;
        }

        favourites.value = [...favourites.value, id];
    }
    watch(
        favourites,
        newValue => {
            localStorage.setItem('favourites', JSON.stringify(newValue))
        }
    )

    return {
        isFavourite,
        favourites,
        toggleFavourite
    }
}