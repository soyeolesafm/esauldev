import React from "react";

const Navbar = () => {
    return (
        <nav className=" flex justify-between  items-center h-24 bg-main_dark m-0 p-0 mx-auto text-paper w-screen fixed " >
             <h1 className= ' z-30 w-full text-3xl font-bold text-paper ml-10 md:ml-24 '  > LOGO </h1>
        <ul className='hidden md:flex justify-between items-center space-x-0 mr-24 ' >
            <li className='p-2 text-lg ' > 
                <a href='#home' > Home </a>
             </li>
             <li className='p-2 text-lg   ' >  
                <a href=' #about' > About</a>
            </li>
            <li className='p-2 text-lg ' > 
                <a href=' #projects '  > Projects </a>
             </li>
             <li className='p-2 text-lg   ' >  
                <a href=' #contact' > Contact</a>
            </li>
            
            
        </ul>
        </nav>
    )
} 

export default Navbar