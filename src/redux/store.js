import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: "root",
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const initialState = {
//   contacts: [],
//   filter: ""
// }


// const enhanser = devToolsEnhancer()

// export const store = createStore(persistedReducer, enhanser)

// export const persistor = persistStore(store)

const reducers = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
})

export const store = configureStore({
  reducer: reducers,
})