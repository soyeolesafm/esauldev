import React from 'react';

const Card = () => {
    return (
        <div className='grid grid-rows-3 grid-cols-3 grid-flow-col gap-4 bg-paper drop-shadow-md rounded-md h-60 w-auto pr-8 m-auto   ' >
            <div className=' row-span-3  bg-ink rounded-md'  ></div>
            <h1 className=' row-span-2  col-span-2 text-ink font-cursive text-8xl text-left mt-20 m-auto ' > Esaul Flores </h1>
            <h3 className=' col-span-2  text-ink font-sans text-5xl text-left mt-0 tracking-wider '  > Web Developer </h3>

        </div>
    )
}

export default Card 