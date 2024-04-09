import {ReactComponent as Logoesa} from "./assets/logo.svg"
import React from "react";

const Contact = () => {
    return (
        <div className=" bg-paper_dark h-screen " id="contact" >
            <div className=" flex flex-col lg:flex-row h-screen " >
                <div className=" lg:mt-0 lg:w-1/2 lg:h-full p-8 order-2 lg:order-1 flex lg:flex-col space-x-36 pl-14 lg:pl-8 lg:space-x-0 lg:space-y-10 mt-5 flex-row"  >
                    <div className="mb-4 lg:mt-72 justify-center">
                        <Logoesa className=" m-auto mb-2 w-14 h-auto " />
                        <a href="#" className=" block  text-center ">linkedin</a>

                    </div>
                    <div>
                        <Logoesa className=" m-auto mb-2 w-14 h-auto  " />
                        <a href="#" className="block text-center" >github</a>
                    </div>
                    
                </div>
                <div className=" mt-28 lg:mt-0 lg:w-1/2 lg:h-full p-8 order-1 lg:order-2">
                        <form className="h-full flex flex-col justify-center">
                            <div className="mb-4" >
                                <label className="block text-main_dark text-sm font-bold mb-2" htmlFor="name">Name:</label>
                                <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-outline focus:shadow-outline"
                                id='name'
                                type="text"
                                placeholder="your name"
                                />
                                <div className="mb-4">
                                    <label className="block text-main_dark text-sm font-bold mb-2" htmlFor="email">Email:</label>
                                    <input 
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-main_dark leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="your email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-main_dark text-sm font-bold mb-2" htmlFor="message">Message:</label>
                                    <textarea 
                                        className=" lg:h-64 shadow appearance-none border rounded w-full py-2 px-3 text-main_dark leading-tight focus:outline-none focus:shadow_outline"
                                        id="message"
                                        rows={4}
                                        placeholder="Message"
                                    />
                                </div>
                                <div>
                                <button
                                    className=" bg-main_dark hover:bg-main_light text-paper font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Send
                                </button>
                                </div>

                            </div>

                        </form>
                    </div>                
            </div>
        </div>
    )
}

export default Contact