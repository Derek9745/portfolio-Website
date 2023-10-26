import React from 'react';
import Intro from './Intro';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Contact from './Contact';


function HomePage(){
    return(
        <>
         <Intro/>
         <Portfolio/>
         <Contact/>
         <Footer/>
        </>
    )
}

export default HomePage;
