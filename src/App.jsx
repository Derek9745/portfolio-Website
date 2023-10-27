import React from 'react'
import {Routes, Route } from 'react-router-dom'
import StardustDemo from "../public/Pages/StardustDemo"
import NoteApp from "../public/Pages/NoteApp"
import HomePage from "../public/Pages/HomePage"
import BuildingProjects from '../public/Pages/BuildingProjects'
import Blender from '../public/Pages/Blender'
import Fusion360 from '../public/Pages/Fusion360'

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
