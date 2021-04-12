import { fetchMoreMovies, fetchMovies } from "./API";
import { useSelector } from "react-redux";
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FIND, LOAD_MORE, RELOAD, LOAD_SUCCESS, LOAD_ERROR } from "../actions/actionsType";
import { findItem, loadMoreData, loadSuccess } from "../actions/Movies";

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
        const pageCurrent = yield select();
        console.log(pageCurrent);
        const res = yield call(fetchMoreMovies, pageCurrent);
        console.log(res);
        const moviesData = yield res.json();
        console.log(moviesData);
        yield put(loadMoreData(moviesData, moviesData.page));
    } catch (error) {
        console.log(error);
        yield put({ type: LOAD_ERROR, error: error.message });
    }
}

function* getFilterMovies() {
    try {
        const Text = yield select();
        yield put(findItem(Text));
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