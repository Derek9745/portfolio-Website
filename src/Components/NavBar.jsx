import React from "react"
import { Link } from "react-router-dom";

function NavBar(){
    return(


        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <a className="navbar-brand">Derek Hehn</a>
            <div className="navbar-nav ">
                <a className="nav-item nav-link active"><Link to = "/" style={{ textDecoration: 'none', color: "black" }}>Home</Link> <span class="sr-only">(current)</span></a>
                <a className="nav-item nav-link"><Link to= "/StardustDemo" style={{ textDecoration: 'none' , color: "black"}}>StardustDemo</Link></a>
                <a className="nav-item nav-link"><Link to = "/NoteApp" style={{ textDecoration: 'none' , color: "black"}}>NoteApp</Link></a>
                <a className="nav-item nav-link"><Link to = "/Fusion360" style={{ textDecoration: 'none', color: "black" }}>Fusion360 Renders</Link></a>
                <a className="nav-item nav-link"><Link to = "/BuildingProjects" style={{ textDecoration: 'none', color: "black" }}>Building Projects</Link></a>
                <a className="nav-item nav-link"><Link to = "/Blender" style={{ textDecoration: 'none' , color: "black"}}>Blender Models</Link></a>
                
                
        </div>
        </nav>


    )
}

export default NavBar;



