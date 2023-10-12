import React from "react";
import dalzo from './assets/Dalzo.png'
import tictactoe from './assets/tictactoe.jpg'
import calculator from './assets/calculator.jpg'
const Projects = () => {
    return (
        <div className=" flex flex-col justify-center bg-paper h-screen mb-5 md:flex-row " id="projects" >
            <div className=" m-auto mt-16" >
                <img  src={dalzo} className="w-11/12 m-auto mt-16" alt="dalzo group" />
            </div  >
            <div className=" flex flex-row gap-6 m-auto mt-1 md:flex-col ">
                <a className=" ml-5" href="https://soyeolesafm.github.io/tictactoe/" target="blank" > 
                    <img src= {tictactoe} className=" w-full m-auto md:h-3/6 md:w-2/5 " alt="tic tac toe" />
                </a>
                <a className=" mr-5" href="https://soyeolesafm.github.io/calculator/" target="blank" >
                    <img src={calculator} className=" w-full m-auto md:h-3/6 md:w-2/5 " alt="calculator " />
                </a>
                
            </div>
        </div>
    )
}

export default Projects