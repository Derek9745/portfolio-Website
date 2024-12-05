import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './tailwind.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter} from 'react-router-dom'
import NavBar from './Components/NavBar'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
            <NavBar/>
            <App/>    
  </BrowserRouter>,
)



