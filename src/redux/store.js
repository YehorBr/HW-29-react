import { devToolsEnhancer } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducer";

export const initialState = {
  contacts: [],
  filter: ""
}


const enhanser = devToolsEnhancer()

export const store = createStore(rootReducer, enhanser)