import React from 'react';

export default function AboutMe () {
  return (
      <div className="flex justify-center">
        <div className="w-screen lg:w-160 md:w-screen px-6 md:px-20 lg:px-0">
          <div className="w-50">
            <h1 className="h-14 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500/100 to-pinkish">
            about me
            </h1>
          </div>
          <div className="flex-col flex justify-center items-center md:flex-row">
            <div className="grid place-items-center md:w-130 mr-10">
              <h3 className="text-left text-1xl font-display text-white">
                I'm a graduate student at&nbsp;
                <a href="https://www.csulb.edu/about-csulb/our-mission-vision-values/" id="link" className="text-pinkish inline-block" target="_blank" rel="noreferrer">California State University of Long Beach</a>
                , with a B.S. in Kinesiology. I was previously pursuing a career in Physical Therapy, but during my last year of college I discovered software development. After writing a few lines of code, it immediately caught my interest! Software development suited my personality a lot more, I love the critical thinking aspect and it also allowed me to express my creativity. I began to teach myself how to code during my last year of college and after graduating, I allocated most of my time into coding.
              </h3>
              <>&nbsp;</>
              <h3 className="text-left text-1xl font-display text-white">
                Six months after graduating, I enrolled into&nbsp;
                <a href="https://www.hackreactor.com/" id="link" className="text-pinkish inline-block" target="_blank" rel="noreferrer">Hack Reactor</a>
                , an advance software engineering immersive. I completed their 12-week program where I learned how to create full-stack applications in an agile enviroment. Here I also learned the importance of team work and communication.
              </h3>
            </div>
            <div className="grid place-items-center sm:w-96 w-fit pt-6 md:pt-0">
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