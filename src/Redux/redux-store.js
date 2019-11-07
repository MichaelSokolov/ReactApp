import { createStore, combineReducers } from "redux";
import houseReducer from "./housesReducer";

const reducers = combineReducers({housesPage: houseReducer})
const store = createStore(reducers);

window.store = store;

export default store;