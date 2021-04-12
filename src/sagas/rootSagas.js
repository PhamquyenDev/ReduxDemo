import { all } from 'redux-saga/effects';
import {
    watchFetchData,
    watchFetchMoreData,
    watchFilterMovies
} from './MoviesSaga';


export default function* rootSagas() {
    yield all([
        watchFetchData(),
        watchFetchMoreData(),
        watchFilterMovies(),
    ]);
}
