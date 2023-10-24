import React from 'react';

function Intro(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
                <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Derek Hehn</h1>
                <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
                <p id= "Demo" className= "text-sm max-w-xl mb-6 font-bold">My name is Derek Hehn. I am indie dev and full stack developer. 
                I excel in game development in Unity Game Engine, having created many demos, with experience both in scripting and 3D modeling. 
                My primary languages for coding are C# and Python.</p>

        </div>
       
    )
}

var i =0;
var txt;
var speed = 50;

function typeWriter(){
    if (i< txt.length){
        document.getElementById("Demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}

export default Intro;