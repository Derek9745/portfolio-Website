import React from "react"
import { Link } from "react-router-dom";

function NavBar(){
    return(


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand"  href="#">Derek Hehn</a>
            <div className="navbar-nav">
                <a className="nav-item nav-link active"><Link to = "/">Home</Link> <span class="sr-only">(current)</span></a>
                <a className="nav-item nav-link"><Link to= "/StardustDemo">StardustDemo</Link></a>
                <a className="nav-item nav-link"><Link to = "/NoteApp">NoteApp</Link></a>
                <a className="nav-item nav-link"><Link to = "/Fusion360">Fusion360 Renders</Link></a>
                <a className="nav-item nav-link"><Link to = "/BuildingProjects">Building Projects</Link></a>
                <a className="nav-item nav-link"><Link to = "/Blender">Blender Models</Link></a>
                
                
        </div>
        </nav>


    )
}

export default NavBar;



