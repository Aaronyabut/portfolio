import React from 'react';

export default function AboutMe () {
  return (
      <div className="flex justify-center mx-14" >
        <div className="w-160 ">
          <div className="w-50">
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500/100 to-pinkish">
            about me
            </h1>
          </div>
          <div className="flex">
            <div className=" w-128">
              <h3 className="text-left text-1xl font-display text-white">
                I graduated at California State University of Long Beach, with a B.S. in Kinesiology and Cum Laude in 2021. I was previously pursuing to become a Physical Therapist but during my last in year college I discovered software development. After writing my first line of code, I immediately fell in love! Software development suited my personality a lot more, I love the critical thinking aspect and it also allowed me to express my creativity side. I was self teaching myself how to code during my last year of college and after graduating, I took coding more serious.
              </h3>
              <>&nbsp;</>
              <h3 className="text-left text-1xl font-display text-white">
                Six months after graduating, I enrolled into&nbsp;
                <a href="https://www.hackreactor.com/" id="link" className="text-pinkish" target="_blank">Hack Reactor</a>
                , an advance software engineering immersive. I completed their 12-week program where I learned how to create full stack applications in an agile enviroment. Here I learned the importance of team work and communication.
              </h3>
            </div>

              <img
                src="itME.jpg"
                className="
                  max-h-96 opacity-100 ease-in duration-700 ml-10
                "
                id="itMe"
              />
          </div>
        </div>
      </div>
  )
}