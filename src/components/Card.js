import React from 'react';

const Card = () => {
    return (
        <div className='grid grid-rows-3 grid-cols-5 grid-flow-col gap-4 bg-main_light h-60 w-2/6 m-auto   ' >
            <div className=' row-span-3 col-span-2 bg-ink '  ></div>
            <h1 className=' row-span-2  col-span-2 text-ink ' > Esaul Flores </h1>
            <h3 className=' col-span-2  text-ink '  > Web Developer </h3>

        </div>
    )
}

export default Card 