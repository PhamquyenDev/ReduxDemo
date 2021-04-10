import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from "./reducers/rootReducers";
import rootSagas from "./sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

export default store;