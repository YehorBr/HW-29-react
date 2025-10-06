import { devToolsEnhancer } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {
  FLUSH, PAUSE,
  PERSIST,   PURGE,
  REGISTER, REHYDRATE
} from 'redux-persist';

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const initialState = {
  contacts: [],
  filter: ""
}


const enhanser = devToolsEnhancer()

export const store = createStore(persistedReducer, enhanser)

export const persistor = persistStore(store)