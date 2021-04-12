import fetch from 'node-fetch';

const REQUEST_FETCH_URL = 'https://api.themoviedb.org/3/movie/77422/similar?api_key=ca6757db8048c2ac657560858f4f9495&language=en-US&page=1';

export function fetchMovies() {
    return fetch(REQUEST_FETCH_URL);
}

// export function fetchDetailMovies(moviesId) {
//     return fetch(`https://api.themoviedb.org/3/movie/${moviesId}/similar?api_key=ca6757db8048c2ac657560858f4f9495&language=en-US&page=1`);
// }

export function fetchMoreMovies(page) {
    return fetch(`https://api.themoviedb.org/3/movie/77422/similar?api_key=ca6757db8048c2ac657560858f4f9495&language=en-US&page=${page}`);
}