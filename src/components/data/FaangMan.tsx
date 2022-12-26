import React from 'react';

export default function FaangMan () {


  return (
    <div className="flex flex-row">
      <div className="w-140 relative left-6 h-auto my-auto text-left">
        <div className="text-white">
          <p className="h-auto p-2 font-bold text-3xl">
            Faang Man
          </p>
        </div>
        <div className="relative z-500 text-white bg-purpleish h-auto my-2 rounded-xl p-2 shadow-3xl">
          <p className="h-auto p-2 ">
            An optimized back-end API for an e-commerce application
          </p>
        </div>
          <ul className=" flex flex-row-reverse space-x-4 space-x-reverse my-2 px-2 pt-2 text-pinkish">
            <li><a id="link" href="https://www.mongodb.com/home/" target="_blank">MongoDB</a></li>
            <li><a id="link" href="http://www.expressjs.com/" target="_blank">Express.js</a></li>
            <li><a id="link" href="https://www.nodejs.org/en/docs/es6/" target="_blank">Node.js</a></li>
            <li><a id="link" href="https://www.reactjs.org/" target="_blank">React.js</a></li>
            <li><a id="link" href="https://www.javascript.com/" target="_blank">JavaScript</a></li>
          </ul>
          <ul className=" text-white color-pinkish block flex flex-row pl-2">
            <li ><a id="link" href="https://github.com/Blue-Ocean-Slytherin" title="GitHub" target="_blank"><svg className="text-gray-100 fill-current h-10 w-10 hover:text-pinkish" viewBox="0 0 500 500"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" /></svg></a></li>

          </ul>
      </div>
      <div id="card"
        className="
          rounded-2xl mt-4 h-96  w-992  overflow-hidden bg-cover bg-RR shadow-3xl
        "
        >
        <div id='info'
          className="
            relative max-w-full h-500 bg-white transition opacity-10
          "
          >
          <h1 id='title'
            className="
              m-0 p-6 text-2.5 leading-none decoration-black
            "
            >Faang Man</h1>
          <p id='description'
            className="
              m-0 p-desc text-base leading-normal
            "
            >A back end application that allows users to trade books locally, constructed by a team of six engineers. I designed the wireframe for our application, where I utilized Figma. I made sure that our application had a smooth UI flow within each component. I also developed the nav bar and home page, I made use of the Google Books API to retrieve book data and displayed the books that our top users put up for listing in a carousel. I obtained the top users by sorting their average rating in descending order in the backend.
          </p>
        </div>
      </div>
    </div>
  )
}