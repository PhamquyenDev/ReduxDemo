import fetch from 'node-fetch';
import { select } from 'redux-saga/effects';

const REQUEST_FETCH_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=ca6757db8048c2ac657560858f4f9495&language=en-US&page=1';

export function fetchMovies() {
    return fetch(REQUEST_FETCH_URL);
}

export function* fetchFilterMovies(filterName) {

    const resp = yield select(state => state.Movies.movies);
    console.log(resp);
    const findTextUpper = filterName.toUpperCase();
    console.log(findTextUpper);

    // trong operation fn không định nghĩa đc filter của react
    const newData = resp.movies.filter((item) => {
        const itemdata = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        return itemdata.indexOf(findTextUpper) > -1;
    });

    console.log(newData);
    return newData;
}

export function fetchMoreMovies(page) {
    return fetch('https://api.themoviedb.org/3/movie/popular?api_key=ca6757db8048c2ac657560858f4f9495&language=en-US&page=' + page);
}