import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';
import store from "./store/index";
//import { addArticle } from "./actions/index";
import { Provider } from "react-redux";

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")    
)

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
