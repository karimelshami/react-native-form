import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import combinedReducers from './reducer';
import rootSaga from './saga'

const intialState = {};
const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = middleware => {
    return applyMiddleware(...middleware)
};

const store = createStore(combinedReducers, intialState, bindMiddleware([sagaMiddleware]));

sagaMiddleware.run(rootSaga);

export { store }
