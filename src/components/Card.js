import React from 'react';
// import  Logoesa  from "./img/logocara.svg"
const Card = () => {
    return (
        <div className='   grid grid-rows-3 grid-cols-3 grid-flow-col gap-4 bg-paper_dark drop-shadow-md rounded-md h-40 w-5/6 pr-8 m-auto md:h-60 md:w-auto   ' >
            <div className=' row-span-3 '  > 
            {/* <img src={Logoesa} /> */}
            </div>
            <h1 className=' row-span-2 col-span-2  text-ink font-cursive text-5xl text-center mt-8 m-auto md:text-left md:text-8xl  md:mt-24  ' > Esaul Flores </h1>
            <h3 className=' col-span-2  text-ink font-sans text-xl text-center mt-0 tracking-wider md:text-4xl md:text-left md:mt-1 '  > Web Developer </h3>

        </div>
    )
}

export default Card 