import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root/Root'
import { configureStore } from './stores';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
