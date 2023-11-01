import React from 'react';
import ReactPlayer from 'react-player'

function StardustDemo(){
    return(
       
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
        <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Stardust Demo</h1>
        <body>
        <ReactPlayer playing url='/assets/movie_024.mp4' 
                height='500px '
                width='800px'
                controls='true'
                muted  = "true"
                

            />
        </body>
        <div className = "text-align-center word-wrap:break-words border-2 border-stone-900 rounded-md overflow-hidden"
        Style = " width:800px">
        <p border-style:solid>
           
            This is a twin stick controlled shooter created in Unity Game engine. 
            The models were created in Blender. Controls require a gamepad.
            Shoot your way through waves of falling meteors until you reach the final level! 
           
        
       </p>
       <a className = "font-size: small " style={{ color: "black" }} href = "https://github.com/Derek9745/StardustDemo" >https://github.com/Derek9745/StardustDemo</a>

        </div>

        </div>
    )
}

export default StardustDemo;