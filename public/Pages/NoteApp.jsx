import React from 'react';

function NoteApp(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
        <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Note App</h1>
        <img className = "h-50 w-50 pt-20   " src = "/assets/Screenshot (225).png"></img>
           
        <div className = "text-align-center word-wrap:break-words border-2 border-stone-900 rounded-md overflow-hidden"
        Style = " width:800px">
        <p border-style:solid>
           
           This is a Data input application built in Python using tkinter for the GUI, which connects to a SQL database to store and retrieve notes, and allows a user to easily input multiple pieces of data into a spreadsheet that can perform basic data analysis, as well as load data from Excel Files.
           
        
       </p>
       <a className = "font-size: small " style={{ color: "black" }} href = "//assets/ExpenseTracker.png" > https://github.com/Derek9745/PythonExpenseTracker</a>

        </div>

        </div>
        
    )
}

export default NoteApp;