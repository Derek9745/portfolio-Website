import React from 'react'
import {Routes, Route } from 'react-router-dom'
import StardustDemo from "../public/Pages/StardustDemo"
import NoteApp from "../public/Pages/NoteApp"
import HomePage from "../public/Pages/HomePage"
import BuildingProjects from '../public/Pages/BuildingProjects'
import Blender from '../public/Pages/Blender'
import Fusion360 from '../public/Pages/Fusion360'
import AutoCAD from '../public/Pages/AutoCAD'
import ChatAssistant from '../public/Pages/ChatAssistant'
function App() {
  return (
      <>
      <Routes>
          <Route path = '/' element ={<HomePage/>}/>
          <Route path = '/StardustDemo' element = {<StardustDemo/>}/>
          <Route path = '/NoteApp' element = {<NoteApp/>}/>
          <Route path = '/Blender' element = {<Blender/>}/>
          <Route path = '/Fusion360' element = {<Fusion360/>}/>
          <Route path = '/AutoCAD' element = {<AutoCAD/>}/>
          <Route path = '/BuildingProjects' element = {<BuildingProjects/>}/>
          <Route path = '/ChatAssistant' element = {<ChatAssistant/>}/>
      </Routes>


        
      </>
  )
}

export default App
