import React from 'react';

function Intro(){
    return(
    <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand"  href="#">Derek Hehn</a>
                
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Stardust Demo</a>
                        <a className="nav-item nav-link" href="#">Note App</a>
                        <a className="nav-item nav-link" href="#">Fusion360 Renders</a>
                        <a className="nav-item nav-link" href="#">Building Projects</a>
                        <a className="nav-item nav-link" href="#">Blender Models</a>
                </div>
            </nav>
       
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
                <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Derek Hehn</h1>
                <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
                <p className="text-sm max-w-xl mb-6 font-bold">My name is Derek Hehn. I am indie dev and full stack developer.
                    I excel in game development in Unity Game Engine, having created many demos, with experience both in scripting and 3D modeling.
                    My primary languages for coding are C# and Python.</p>

            </div></>
       
    )
}

export default Intro;

