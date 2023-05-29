import { genres } from "./data"

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.TMDB_API
    }
}

let genresFetched = false

export async function getGenres() {
    if (genresFetched) {
        return
    }
    await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options) 
        .then(async response => await response.json())
        .then(jsonData => genres.value.push(...jsonData.genres))
        .catch(err => console.error(err));
}

    export const runSearch = async (search) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(jsonData => jsonData.results)
        .catch(err => console.error(err));
    }

