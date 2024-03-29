import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";  // redux-persist config
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); // redux-persist config

export default {store, persistor}; // redux-persist config