import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'

import { Calendario } from './Calendario';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Calendario />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
