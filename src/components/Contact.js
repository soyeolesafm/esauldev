import {ReactComponent as Logoesa} from "./assets/logo.svg"
import React from "react";

const Contact = () => {
    return (
        <div className=" bg-main_light h-screen " id="contact" >
            <div className=" flex flex-col lg:flex-row h-screen " >
                <div className=" lg:w-1/2 lg:h-full p-8 order-2 lg:order-1 " >
                    <div className="mb-4">
                        <Logoesa className="mb-2 w-14 h-auto " />
                        <a href="#" className=" block ">linkedin</a>

                    </div>
                    <div>
                        <Logoesa className="mb-2 w-14 h-auto  " />
                        <a href="#" className="block" >github</a>
                    </div>
                    <div className=" lg:w-1/2 lg:h-full p-8 order-1 lg:order-2">
                        <form className="h-full flex flex-col justify-center">
                            <div className="mb-4" >

                            </div>

                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact