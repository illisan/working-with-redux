import { createStore } from "redux"
import rootReducer from "../reducers/index"

const store = createStore(rootReducer); //taking in a reducer as first argument

export default store;