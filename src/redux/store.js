import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import UserReducer from './user/UserReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga'


const mid = createSagaMiddleware();

const combine = combineReducers({
    user: UserReducer
});

const store = createStore(combine, composeWithDevTools(applyMiddleware(logger, thunk, mid)));

mid.run(rootSaga)

export default store;