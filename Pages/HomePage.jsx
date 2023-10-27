import React from 'react';
import Intro from '../../src/Components/Intro';
import Portfolio from '../../src/Components/Portfolio';
import Footer from '../../src/Components/Footer';
import Contact from '../../src/Components/Contact';


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
