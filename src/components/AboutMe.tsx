import React from 'react';

export default function AboutMe () {
  return (
      <div className="flex justify-center " >
        <div className="w-screen lg:w-160 md:w-screen px-6 md:px-20 lg:px-6  border-pinkish">
          <div className="w-50">
            <h1 className="h-14 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500/100 to-pinkish">
            about me
            </h1>
          </div>
          <div className="flex-col flex justify-center items-center md:flex-row  border-pinkish">
            <div className="md:w-130  mr-10">
              <h3 className="text-left text-1xl font-display text-white">
                I am graduate student at&nbsp;
                <a href="https://www.csulb.edu/about-csulb/our-mission-vision-values/" id="link" className="text-pinkish inline-block" target="_blank" rel="noreferrer">California State University of Long Beach</a>
                , with a B.S. in Kinesiology and Cum Laude in 2021. I was previously pursuing to become a Physical Therapist but during my last in year college I discovered software development. After writing my first line of code, I immediately fell in love! Software development suited my personality a lot more, I love the critical thinking aspect and it also allowed me to express my creativity side. I was self teaching myself how to code during my last year of college and after graduating, I took coding more serious.
              </h3>
              <>&nbsp;</>
              <h3 className="text-left text-1xl font-display text-white">
                Six months after graduating, I enrolled into&nbsp;
                <a href="https://www.hackreactor.com/" id="link" className="text-pinkish inline-block" target="_blank" rel="noreferrer">Hack Reactor</a>
                , an advance software engineering immersive. I completed their 12-week program where I learned how to create full stack applications in an agile enviroment. Here I learned the importance of team work and communication.
              </h3>
            </div>
            <div className=" w-96 pt-6 md:pt-0 ">
              <img
                src="https://raw.githubusercontent.com/Aaronyabut/portfolio/main/itME.jpg"
                className="
                max-h-96 opacity-100 ease-in duration-700
                "
                id="itMe"
                />
            </div>
          </div>
        </div>
      </div>
  )
}