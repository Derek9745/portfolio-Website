import React from 'react';

function Blender(){
    return(
        <section class = "containeer">
            <div class ="slider-wrapper" className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
                <img id = "slide-1" src = "/assets/ProductRender2Items.jpg" alt = "3D render of sunscreen packaging"/>
                <img id = "slide-2"  src = "/assets/Generator-Render.jpg" alt = "Rendering of a commercial generator"></img>
                <img id = "slide-3"  src = "/assets/Chess Render Hi Res.jpg" alt = "Rendering of a chess board"></img>
                <div class = "slider-nav">
                    <a href = "#slide-1"></a>
                    <a href = "#slide-2"></a>
                    <a href = "#slide-3"></a>
                </div>

            </div>
        </section>
       
     
    )
}

export default Blender;