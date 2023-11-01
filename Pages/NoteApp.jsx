import React from 'react';

function NoteApp(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
        <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Note App</h1>
        <img className = "h-50 w-50 pt-20   " src = "/assets/Screenshot (225).png"></img>
           
        <div className = "text-align-center word-wrap:break-words border-2 border-stone-900 rounded-md overflow-hidden"
        Style = " width:800px">
        <p border-style:solid>
           
           This is a note taking application built written in Python using tkinter for the GUI, which connects to a SQL database to store and retrieve notes.  
           
        
       </p>
       <a className = "font-size: small " style={{ color: "black" }} href = "https://github.com/Derek9745/StardustDemo" >https://github.com/Derek9745/PythonNoteApp</a>

        </div>

        </div>
        
    )
}

export default NoteApp;