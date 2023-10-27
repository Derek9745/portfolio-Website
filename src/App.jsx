import React from 'react'
import {Routes, Route } from 'react-router-dom'
import StardustDemo from "./Components/StardustDemo"
import NoteApp from "./Components/NoteApp"
import HomePage from "./Components/HomePage"
import BuildingProjects from './Components/BuildingProjects'
import Blender from './Components/Blender'
import Fusion360 from './Components/Fusion360'

function App() {
  return (
      <>
      <Routes>
          <Route path = '/' element ={<HomePage/>}/>
          <Route path = '/StardustDemo' element = {<StardustDemo/>}/>
          <Route path = '/NoteApp' element = {<NoteApp/>}/>
          <Route path = '/Blender' element = {<Blender/>}/>
          <Route path = '/Fusion360' element = {<Fusion360/>}/>
          <Route path = '/BuildingProjects' element = {<BuildingProjects/>}/>
      </Routes>


        
      </>
  )
}

export default App
