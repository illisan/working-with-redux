import React from 'react';
//import {render} from 'react-dom';
import './index.css';
import App from './components/App';
import ReactDOM from "react-dom"
import registerServiceWorker from './registerServiceWorker';
//import store from "./store/index";
//import { addArticle } from "./actions/index";
import { createStore } from "redux"
import allReducers from "./reducers/index"
import { Provider } from "react-redux";

const store = createStore(allReducers); 

ReactDOM.render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")    
)
 registerServiceWorker();
