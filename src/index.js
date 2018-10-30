import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import "./App.css";
import App from './App';
import GameInteractionReducer from './reducers/gameInteractions';


const store = createStore(
    GameInteractionReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,

    document.getElementById("root")
);