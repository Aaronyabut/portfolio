import React from 'react';

export default function ReadingRainforest () {


  return (
    <div className="flex flex-row">
      <div id="card"
        className="
          rounded-2xl mt-4 h-96  w-992  overflow-hidden bg-cover bg-RR shadow-3xl
        "
        >
        <div id='info'
          className="
            relative max-w-full h-500 bg-white transition opacity-90
          "
          >
          <h1 id='title'
            className="
              m-0 p-6 text-2.5 leading-none decoration-black
            "
            >Reading Rainforest</h1>
          <p id='description'
            className="
              m-0 p-desc text-base leading-normal
            "
            >A full-stack application that allows users to trade books locally, constructed by a team of six engineers. I designed the wireframe for our application, where I utilized Figma. I made sure that our application had a smooth UI flow within each component. I also developed the nav bar and home page, I made use of the Google Books API to retrieve book data and displayed the books that our top users put up for listing in a carousel. I obtained the top users by sorting their average rating in descending order in the backend.
          </p>
        </div>
      </div>
      <div className="w-140 relative right-6 h-auto my-auto text-right">
        <div className="text-white">
          <p className="h-auto p-2 font-bold text-3xl">
            Reading Rainforest
          </p>
        </div>
        <div className=" text-white bg-purpleish h-auto my-2 rounded-xl p-2 shadow-3xl">
          <p className="h-auto p-2 ">
            A full-stack application of a website that allows users to trade their books locally.
          </p>
        </div>
          <ul className=" flex flex-row-reverse space-x-4 space-x-reverse mt-2 px-2 pt-2 text-pinkish">
            <li><a id="link" href="https://www.mongodb.com/home/" target="_blank">MongoDB</a></li>
            <li><a id="link" href="http://www.expressjs.com/" target="_blank">Express.js</a></li>
            <li><a id="link" href="https://www.nodejs.org/en/docs/es6/" target="_blank">Node.js</a></li>
            <li><a id="link" href="https://www.reactjs.org/" target="_blank">React.js</a></li>
            <li><a id="link" href="https://www.javascript.com/" target="_blank">JavaScript</a></li>
          </ul>
          <ul className=" flex flex-row-reverse space-x-4 space-x-reverse mb-2 px-2 pt-1 text-pinkish">
            <li><a id="link" href="http://www.expressjs.com/" target="_blank">Material UI</a></li>
          </ul>
          <ul className=" text-white color-pinkish block flex flex-row-reverse pr-2">
            <li ><a id="link" href="https://github.com/Blue-Ocean-Slytherin" title="GitHub" target="_blank"><svg className="text-gray-100 fill-current h-10 w-10 hover:text-pinkish" viewBox="0 0 500 500"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" /></svg></a></li>

          </ul>
          {/* <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 24 24"><g transform="translate(-40 -40)"><rect width="24" height="24" x="40" y="40" fill="none"/><path fill="#2c2c2c" d="M144.49,381.147L151.51,381.147C153.93,381.147 155.9,383.062 155.9,385.361C155.9,386.705 155.226,387.919 154.182,388.694C155.226,389.47 155.9,390.683 155.9,392.028C155.9,394.326 153.93,396.241 151.51,396.241C150.524,396.241 149.613,395.924 148.88,395.392L148.88,398.694C148.88,400.993 146.911,402.908 144.49,402.908C142.07,402.908 140.1,400.993 140.1,398.694C140.1,397.35 140.774,396.137 141.818,395.361C140.774,394.585 140.1,393.372 140.1,392.028C140.1,390.683 140.774,389.47 141.818,388.694C140.774,387.919 140.1,386.705 140.1,385.361C140.1,383.062 142.07,381.147 144.49,381.147ZM147.12,396.241L144.49,396.241C143.06,396.241 141.86,397.336 141.86,398.694C141.86,400.053 143.06,401.147 144.49,401.147C145.921,401.147 147.12,400.053 147.12,398.694L147.12,396.241ZM148.88,392.028C148.88,390.669 150.079,389.574 151.51,389.574C152.94,389.574 154.14,390.669 154.14,392.028C154.14,393.386 152.94,394.481 151.51,394.481C150.079,394.481 148.88,393.386 148.88,392.028ZM144.457,389.575C143.041,389.591 141.86,390.68 141.86,392.028C141.86,393.386 143.06,394.481 144.49,394.481L147.12,394.481L147.12,389.574L144.49,389.574L144.457,389.575ZM147.12,387.814L147.12,382.908L144.49,382.908C143.06,382.908 141.86,384.002 141.86,385.361C141.86,386.72 143.06,387.814 144.49,387.814L147.12,387.814ZM148.88,387.814L151.51,387.814C152.94,387.814 154.14,386.72 154.14,385.361C154.14,384.002 152.94,382.908 151.51,382.908L148.88,382.908L148.88,387.814Z" transform="translate(-96 -340)"/></g></svg>
            </li> */}
      </div>
    </div>
  )
}