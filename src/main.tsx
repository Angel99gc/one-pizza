import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from './Home.tsx'
import About from './About.tsx'
import App from './App.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/"  element={ <App />}>
          <Route index element={ <Home />}></Route> 
          <Route path="about" element={ <About />}></Route> 
        </Route> 
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
