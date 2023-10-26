import React from "react"

function NavBar(){
    return(


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand"  href="#">Derek Hehn</a>
        
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="/StardustDemo">Stardust Demo</a>
                <a className="nav-item nav-link" href="/NoteApp">Note App</a>
                <a className="nav-item nav-link" href="#">Fusion360 Renders</a>
                <a className="nav-item nav-link" href="#">Building Projects</a>
                <a className="nav-item nav-link" href="#">Blender Models</a>
                
        </div>
        </nav>


    )
}

export default NavBar;



