import {combineReducers} from "redux" 
import MovieReducer from "./reducer-movies"
import ListReducer from "./reducer-list" 

const allReducers = combineReducers({
    articles: ListReducer,
    movies: MovieReducer,
}) 

export default allReducers