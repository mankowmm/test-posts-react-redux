import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { fetchPostsHttp } from './actions';
import './index.css';

import { configureStore } from './stores'; 
const store = configureStore();
store.dispatch(fetchPostsHttp());


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
