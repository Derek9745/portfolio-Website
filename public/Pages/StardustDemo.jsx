import React from 'react';

function StardustDemo(){
    return(
       
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
        <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Stardust Demo</h1>
        <body>
        <video width="1000" height="500" >
            <source src="assets/movie_024.mp4" type="video/mp4"/>
        </video>
        </body>
       <p>
        This is a twin Stick Shooter created in Unity Game engine. 
        The models were created in Blender. Controls require a gamepad.
         Shoot your way through waves of falling meteors until you reach the final level!
       </p>
        </div>
    )
}

export default StardustDemo;