import React from 'react';

function BuildingProjects(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
        <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Building projects</h1>
       <img className = "h=50 w-20 pt-20 " src = "/assets/woodworkingtable3.jpg"
       width = "500"
       height = "600" ></img>
       
       <div className = "text-align-center word-wrap:break-words border-2 border-stone-900 rounded-md overflow-hidden"
        Style = " width:800px">
        <p border-style:solid>
           This is a coffee table that was designed in my free time. Sustainability was incorporated by repurposing the wood used for the tabletop portion. 
       </p>
        </div>
        <img className = "pt-20" src = "assets/20230128_160342.jpg"
        width = "500"
        height = "600"
       ></img>
        <img className = "pt-20" src = "/assets/woodworkingtable2.jpg"
        width = "500"
        height = "600"
       ></img>
       

        </div>
     
    )
}

export default BuildingProjects;