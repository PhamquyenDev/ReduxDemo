import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_ERROR } from "../actions/actionsType";
import {
    findItem, loadMoreData, loadSuccess
} from "../actions/Movies";
import {
    fetchMoreMovies, fetchMovies, fetchFilterMovies
} from "./API";

function* getMovies() {
    try {
        const res = yield call(fetchMovies);
        const moviesData = yield res.json();
        yield put(loadSuccess(moviesData, moviesData.page));
    } catch (error) {
        yield put({ type: LOAD_ERROR, error });
    }
}

function* getMoreMovies() {
    try {
        let pageCurrent = yield select(state => state.Movies.pageCurrent);
        const resp = yield call(fetchMoreMovies, pageCurrent + 1);
        const movies = yield resp.json();
        yield put(loadMoreData(movies));
    } catch (error) {
        console.log(error);
        yield put({ type: LOAD_ERROR, error: error });
    }
}

function* getFilterMovies() {
    try {
        const filterTerm = yield select(state => state.Movies.filterName);
        console.log(filterTerm);

        // const resp = yield call(fetchFilterMovies, filterTerm);
        // console.log(resp);

        yield put(findItem(filterTerm));
    } catch (error) {
        yield put({ type: LOAD_ERROR, error: error.message });
    }
}

export function* watchFetchData() {
    yield takeLatest("API_CALL_REQUEST", getMovies);
}

export function* watchFetchMoreData() {
    yield takeLatest("API_MORE_REQUEST", getMoreMovies);
}

export function* watchFilterMovies() {
    yield takeLatest("API_FILTER_REQUEST", getFilterMovies);
}


// const resp = yield select(state => state.Movies.movies);
//         console.log(resp);
//         const findTextUpper = filterTerm.toUpperCase();
//         const newData = resp.filter((item) => {
//             const itemdata = item.name ? item.name.toUpperCase() : ''.toUpperCase();
//             return itemdata.indexOf(findTextUpper) > -1;
//         });
//         console.log(newData);