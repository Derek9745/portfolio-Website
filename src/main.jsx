import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './tailwind.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StardustDemo from "./Components/StardustDemo"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>  
  </React.StrictMode>,
)



