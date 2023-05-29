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
                , holding a B.S. in Kinesiology. Originally, my path was set towards a career in Physical Therapy, but everything changed during my final year of college when I stumbled upon the world of software development. With just a few lines of code, I was immediately captivated by its allure. The logical thinking required and the opportunity to unleash my creativity resonated with me on a deep level.
              </h3>
              {/* <>&nbsp;</> */}
              <h3 className="text-left text-1xl font-display text-white">
                Motivated by this newfound passion, I embarked on a self-guided journey to teach myself how to code. Immersed in the world of programming, I devoted most of my time to honing my skills after graduating from university.
              </h3>
              {/* <>&nbsp;</> */}
              <h3 className="text-left text-1xl font-display text-white">
                To further solidify my knowledge and expertise, I enrolled into&nbsp;
                <a href="https://www.hackreactor.com/" id="link" className="text-pinkish inline-block" target="_blank" rel="noreferrer">Hack Reactor</a>
                , a renowned institution specializing in advanced software engineering. Their intensive 12-week program equipped me with the tools to create full-stack applications in an agile environment. It was during this transformative experience that I discovered the significance of effective teamwork and communication in the realm of software development.
              </h3>
              {/* <>&nbsp;</> */}
              <h3 className="text-left text-1xl font-display text-white">
                Join me on this exciting journey as I continue to expand my knowledge, solve complex problems, and create innovative solutions.
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