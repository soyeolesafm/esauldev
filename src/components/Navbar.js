import React from "react";
import {useState} from "react"
const Navbar = () => {

    const [isOpen, setIsOpen] = useState (false)
    const openMenu =() => {
        setIsOpen (!isOpen)
    }

    return (
        <nav className=" z-10 flex justify-between  items-center h-24 bg-main_dark m-0 p-0 mx-auto text-paper w-screen fixed  " >
             <h1 className= ' z-40  w-full text-3xl font-bold text-paper ml-10 md:ml-24 '  > LOGO </h1>
        <ul className='hidden md:flex justify-between items-center space-x-0 mr-24 ' >
            <li className='p-2 text-xl ' > 
                <a href='#home' > Home </a>
             </li>
             <li className='p-2 text-xl   ' >  
                <a href=' #about' > About</a>
            </li>
            <li className='p-2 text-xl ' > 
                <a href=' #projects '  > Projects </a>
             </li>
             <li className='p-2 text-xl   ' >  
                <a href=' #contact' > Contact</a>
            </li>
            
            
        </ul>
        <div 
        className=" z-50 fixed m-auto top-9 right-10 cursor-pointer  md:hidden " 
        onClick={ openMenu }
         >
            <div className=  { isOpen ? "rotate-45 ease-in-out duration-300 translate-y-1.5 translate-x-1 bg-paper w-6 h-0.5 rounded-sm m-1 " : " ease-in-out duration-300 bg-paper w-6 h-0.5 rounded-sm m-1 " } ></div>
            <div className= { isOpen ? "ease-in-out duration-300  -translate-x-6 bg-transparent w-6 h-0.5 rounded-sm m-1 " : " ease-in-out duration-300 bg-paper w-6 h-0.5 rounded-sm m-1 " } ></div>
            <div className= { isOpen ? " -rotate-45 ease-in-out duration-300 -translate-y-1.5 translate-x-1 bg-paper w-6 h-0.5 rounded-sm m-1 " : " ease-in-out duration-300 bg-paper w-6 h-0.5 rounded-sm m-1 " }></div>
        </div>
        
        <ul
         className={ isOpen? " flex h-screen flex-col justify-between items-center space-x-2  m-0 right-0 opacity-90  text-white bg-main_dark w-full fixed z-20 top-0 md:hidden ease-in-out duration-300 " : " -translate-y-full  flex h-screen flex-col justify-between items-center space-x-2  m-0 right-0 opacity-90  text-white bg-slate-900 w-full fixed z-20 top-0 md:hidden ease-in-out duration-300 " }
                     
         >
            <li 
            className='p-2 text-xl mt-36 '
            onClick={ openMenu } 
             > 
                <a href='#home' > Home </a>
             </li>
            <li 
            className='p-2 text-xl '
            onClick={ openMenu }
             > 
                <a href=' #about '  > About </a>
             </li>
            <li 
            className='p-2 text-xl '
            onClick={ openMenu }
             >  
                <a href=' #project '  > Projects </a>
            </li>
            <li 
            className='p-2 text-xl mb-24 '
            onClick={ openMenu }
             > 
            <a href=' #contact '  > Contact </a>
             </li>
        </ul>

        </nav>
    )
} 

export default Navbar