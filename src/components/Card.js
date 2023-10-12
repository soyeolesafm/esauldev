import React from 'react';
import  {ReactComponent as Logoesa }  from "./assets/logo.svg"
const Card = () => {
    return (
        <div className='  flex flex-col m-auto mt-48 align-middle h-3/6 w-9/12 gap-4  drop-shadow-md rounded-md md:flex-row md:w-7/12' >
            <div className=' m-auto justify-center h-2/3 mb-0 md:w-4/12 md:mb-auto'   > 
            < Logoesa className=' w-2/3 m-auto mt-20 h-5/6   fill-ink md:mt-14 ' />
            </div>
            <div className=' mt-0 md:w-8/12' >
                <h1 className='   text-ink font-cursive text-5xl text-center  m-auto md:text-left md:text-8xl md:mt-32  ' > Esaul Flores </h1>
                <h3 className='  text-ink font-sans text-xl text-center mb-9 tracking-wider md:text-4xl md:text-left md:mt-1 '  > Web Developer </h3>

            </div>
            
        </div>
    )
}

export default Card 