import React from 'react'
import {Routes, Route } from 'react-router-dom'
import StardustDemo from "./Components/StardustDemo"
import NoteApp from "./Components/NoteApp"
import HomePage from "./Components/HomePage"

function App() {
  return (
      <>
      <Routes>
          <Route path = '/' element ={<HomePage/>}/>
          <Route path = '/StardustDemo' element = {<StardustDemo/>}/>
          <Route path = '/NoteApp' element = {<NoteApp/>}/>
      </Routes>


        
      </>
  )
}

export default App
