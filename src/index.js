import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

import App from './App';
import weatherReducer from './store/reducers/weather';
import * as serviceWorker from './serviceWorker';

import './global/reset.css';

// REDUX

const composeEnhancers =
    (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) ||
    compose;

const store = createStore(weatherReducer, composeEnhancers());

// FONTAWESOME

library.add(faMapMarkerAlt, faSearch);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.unregister();
