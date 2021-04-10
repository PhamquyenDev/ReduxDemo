import { fetchMovies } from "./API";

import { call, put, takeLatest } from 'redux-saga/effects';
import { FIND, LOAD_MORE, RELOAD, LOAD_SUCCESS, LOAD_ERROR } from "../actions/actionsType";
import { loadSuccess } from "../actions/Movies";

function* getMovies() {
    try {
        const res = yield call(fetchMovies);
        const moviesData = yield res.json();
        console.log(moviesData);
        yield put(loadSuccess(moviesData.results));
    } catch (error) {
        console.log(error);
        yield put({ type: LOAD_ERROR, error });
    }
}



export default function* watchFetchData() {
    yield takeLatest("API_CALL_REQUEST", getMovies);
}