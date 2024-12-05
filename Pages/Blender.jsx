import React from 'react';

function Blender(){
    return(
        <section className = "containeer">
            <div className ="slider-wrapper flex items-center justify-center flex-col text-center pt-20 pb-6 ">
                <img id = "slide-1" src = "/assets/ProductRender2Items.jpg" alt = "3D render of sunscreen packaging"className="w-full h-auto"/>
                <img id = "slide-2"  src = "/assets/Generator-Render.jpg" alt = "Rendering of a commercial generator"className="w-full h-auto"/>
                <img id = "slide-3"  src = "/assets/Chess Render Hi Res.jpg" alt = "Rendering of a chess board"className="w-full h-auto"/>

                <div className = "slider-nav">
                    <a href = "#slide-1" aria-label="Go to slide 1"></a>
                    <a href = "#slide-2" aria-label="Go to slide 2"></a>
                    <a href = "#slide-3" aria-label="Go to slide 3"></a>
                </div>

            </div>
        </section>
       
     
    );
}

export default Blender;