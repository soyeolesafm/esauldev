import React from "react";

const About = () => {
    return (
        <div className=" bg-paper_dark h-screen flex flex-col md:flex-row gap-2 " id="about" >

        
            <div className="flex align-middle pt-16 w-3/4 h-4/6 justify-items-center m-auto md:w-2/4 md:pt-28 " >
                <p className="font-serif text-sm text-justify tracking-wide mt-20 md:mt-8 m-auto md:text-lg" > 
                    I'm a web developer with a diverse skill set that encompasses JavaScript, ReactJS,
                    and Tailwind CSS. My journey into the world of programming began in high school,
                    where I first honed my coding skills with Basic. Additionally,
                    I have a background in graphic design, adding a creative dimension to my
                    expertise. I'm not only dedicated and hardworking but also thrive in high-pressure
                    situations, maintaining a calm and composed demeanor.
                    My organizational skills are top-notch, and I excel in troubleshooting and 
                    finding innovative solutions to complex challenges. 
                    I'm excited to contribute my skills and passion to your team and take on new web development challenges
                </p>
            </div>
            <div className=" h-1/6 md:h-3/6 w-3/12 m-auto md:mt-48 md:mr-32 pb-0 bg-main_light ">

                

            </div>

            
            
        </div>
    )
}

export default About