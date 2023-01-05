import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'

import { Calendario } from './Calendario';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Calendario />
    </BrowserRouter>
  </React.StrictMode>,
)
