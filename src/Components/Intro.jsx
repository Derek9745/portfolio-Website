import React from 'react';


function Intro(){
    return(
    <>
          
       
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
            <textarea
                name = "message"
                placeholder ="Message"
                rows = "10"
                className = "p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
             />
                <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">Derek Hehn</h1>
                <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
                <p className="text-sm max-w-xl mb-6 font-bold">My name's Derek Hehn, I'm full-stack developer and technical artist. I excel in web, mobile, and game development, having created many demos, writing both scripts and building 3D models. </p>
                <p className ="text-base md:text-xl mb-3 font-medium"> Email: Hehnderek@gmail.com | Github: https://github.com/Derek9745</p>
            </div>

      

  </>

       
    )
}

export default Intro;

