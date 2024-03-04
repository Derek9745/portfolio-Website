import React from 'react';
import ReactPlayer from 'react-player'

function ChatAssistant(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 ">
        <h1 className="text-4xl md:text-7x1 mb-1 md:mb-3 font-bold">AI Chat Assistant</h1>
        <body>
        <ReactPlayer playing url='/assets/AI assistant Demo.mp4' 
                height='500px '
                width='800px'
                controls='true'
                muted  = "true"
                

            />
        </body>
        <div className = "text-align-left word-wrap:break-words border-2 border-stone-900 rounded-md overflow-hidden"
        Style = " width:800px">
        <p border-style:solid>
           
            This is a Chat assistant that utilizes OpenAi API inlcluding ChatGPT and WhisperAI in Unity to allow a user to ask questions via text or through speech.
             Microsoft Azure Cognitive Speech Services is used for text to speech for the assistant.
       </p>
       
        </div>

        </div>




       
     
    )
}

export default ChatAssistant;