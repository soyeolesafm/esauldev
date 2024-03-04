import React from "react";
import dalzo from './assets/Dalzo.png'
import tictactoe from './assets/tictactoe.jpg'
import calculator from './assets/calculator.jpg'
import wide_calculator from './assets/wide_calc.png'
import wide_tictactoe from './assets/wide_tictactoe.png'
const Projects = () => {
    return (
        <div className=" flex flex-col justify-center bg-paper h-screen  md:flex-row " id="projects" >
            <div className=" m-auto mt-16 lg:mt-64 " >
                <img  src={dalzo} className="w-11/12 m-auto mt-16" alt="dalzo group" />
            </div  >
            <div className=" flex flex-row gap-6 m-auto mt-1 md:flex-col lg:mt-44 ">
                <a className=" lg:ml-0 ml-5" href="https://soyeolesafm.github.io/tictactoe/" target="blank" > 
                    <img src= {wide_tictactoe} className=" hidden md:flex md:w-4/6 md:m-auto  " alt="tic tac toe" />
                    <img src= {tictactoe} className=" md:hidden w-full m-auto md:h-3/6  " alt="tic tac toe" />
                </a>
                <a className="lg:mr-0 mr-5" href="https://soyeolesafm.github.io/calculator/" target="blank" >
                    <img src= {wide_calculator} className=" hidden md:flex md:w-4/6 md:m-auto  " alt="calculator" />
                    <img src={calculator} className="md:hidden  w-full m-auto md:h-3/6 md:w-2/5 " alt="calculator " />

                </a>
                
            </div>
        </div>
    )
}

export default Projects