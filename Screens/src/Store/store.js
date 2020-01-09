import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    whitelist: ["SaveFormDataReducer"],
    debug: true,

  }
import thunk from "redux-thunk";
import logger from "redux-logger";
const enhancer = compose(applyMiddleware(thunk, logger));
import  rootReducer  from "../Reducer/Reducer";
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store= createStore(persistedReducer,enhancer)
persistStore(store)
export default store