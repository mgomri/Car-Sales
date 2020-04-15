import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import './scss/styles.scss';
import './scss/all.min.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';


const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
