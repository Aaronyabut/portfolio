import React from 'react';

export default function Introduction () {
  return (
    <div className=" flex justify-center mx-14">
      <div className="w-screen md:w-150 px-6">
        <h5 className="text-left text-2xl font-display text-white">
          Hi there, my name is
        </h5>
        <div className="w-fit md:w-140 ">
          <h1 className="text-5xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500/100 to-pinkish ">
            Aaron Yabut.
          </h1>
        </div>
        <h3 className="text-left text-3xl sm:text-5xl mb-3 font-display text-white ">
          I'm a full-stack developer.
        </h3>
        <h3 className="text-left text-1xl font-display text-white ">
          I have a passion for building software applications! I thoroughly enjoy the process of creating something I had envisioned from the ground up. I love creating applications that challenges me and also allows me to be creative.
        </h3>
        <h3 className="text-left text-1xl font-display text-white ">
          I'm currently a Web Developer at <a href="https://www.roberthalf.com/about-robert-half" id="link" className="text-pinkish inline-block" target="_blank" rel="noreferrer">Robert Half</a>, I'm in their front-end development team and involved in rebuilding their US and Canadian site.
        </h3>

        <div className="ml-10 mt-10 w-48 hover:cursor-pointer " >
          <div className="relative group">
            <a href="https://drive.google.com/file/d/1TuIT19xUjt8Y9iU7OFNCWL6NQf1BVKa6/view?usp=share_link" target="_blank">
              <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500/100 to-pinkish rounded-lg blur opacity-25 animate-pulse group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex justify-center relative px-7 py-6 bg-blueish ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div className="flex justify-center">
                  <p className="text-right font-extrabold text-slate-100">RESUME</p>
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>

  )
}