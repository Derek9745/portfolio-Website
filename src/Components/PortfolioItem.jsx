import React from 'react';

function PortfolioItem({title, imgUrl, stack, link}){
    return(
        <div className= "border-2 border-stone-900 rounded-md overflow-hidden ">
            
        <a  href= {link} >
        <img src={imgUrl} alt="portfolio"className="w-full h-36 md:h-48 object-fill cursor-pointer"/>
        </a> 

        
            <div className="w-full p-4">
                <h3 className="text-lg md:text -x1 mb-2 md:mb-3 font-semibold">{title} </h3>
                <p className="flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
                    {stack.map(item =>(
                        <span className=" text-white bg-yellow-500 
                            drop-shadow-md hover:stroke-white  inline-block px-2 py-1 font-semibold border-2 border-stone-50 rounded-md">
                            {item}
                        </span>
                    ))}
               </p>
            </div>
            </div>
    )
}

export default PortfolioItem;