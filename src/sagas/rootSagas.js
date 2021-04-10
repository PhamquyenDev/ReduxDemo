import watchFetchData from './MoviesSaga';

import { all, call } from 'redux-saga/effects';

export default function* rootSagas() {
    yield all([
        watchFetchData(),
    ]);
}
