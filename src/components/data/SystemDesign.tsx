import React from 'react';

export default function SystemDesign () {


  return (
    <div className="flex flex-row">
      <div className="w-150 relative left-6 h-auto my-auto text-left">
        <div className="text-white">
          <p className="h-auto p-2 font-bold text-3xl">
            System Design
          </p>
        </div>
        <div className="relative text-white bg-purpleish h-auto my-2 rounded-xl p-2 shadow-3xl z-500 ">
          <p className="h-auto p-2 break-normal">
            Built and optimized a back-end API of an e-commerce application
          </p>
        </div>
          <ul className=" flex flex-row space-x-4 space-x mt-2 px-2 pt-2 text-pinkish">
            <li><a id="link" href="https://www.javascript.com/" target="_blank">JavaScript</a></li>
            <li><a id="link" href="https://www.javascript.com/" target="_blank">Node.js</a></li>
            <li><a id="link" href="https://www.reactjs.org/" target="_blank">Express.js</a></li>
            <li><a id="link" href="https://www.nodejs.org/en/docs/es6/" target="_blank">PostgreSQL</a></li>
          </ul>
          <ul className=" flex flex-row space-x-4 space-x mb-2 px-2 pt-1 text-pinkish">
            <li><a id="link" href="http://www.expressjs.com/" target="_blank">NGINX</a></li>
            <li><a id="link" href="https://www.mongodb.com/home/" target="_blank">AWS EC2</a></li>
          </ul>
          <ul className=" text-white color-pinkish block flex flex-row pl-2">
            <li ><a id="" href="https://github.com/rfp2207-SDC-Gimli/QnA" title="GitHub" target="_blank"><svg className="text-gray-100 fill-current h-10 w-10 hover:text-pinkish" viewBox="0 0 500 500"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" /></svg></a></li>

          </ul>
      </div>
      <div id="card"
        className="
          rounded-2xl mt-4 h-60  w-1200  overflow-hidden bg-cover bg-SDC shadow-3xl
        "
        >
        <div id='info'
          className="
            relative max-w-full h-500 bg-white transition opacity-90
          "
          >
          <h1 id='title'
            className="
              m-0 px-6 text-2.5 leading-none decoration-black
            "
            >System Design
          </h1>
          <p id='description'
            className="
              m-0 p-desc text-base leading-normal
            "
            >An e-commerce application that contained over 12 million data entries. My goal was to develop an application that can handle 1,000 client requests per second. I built the server using Express and transferred millions of data entries into a postgreSQL database by performing  an ETL process. I then deployed my application into AWS and scaled horizontally with two EC2 T2 micro instances and used Nginx as my load-balancer. I switched to least connection load-balancing, and performed content caching in Nginx, which allowed me to surpass my goal. As a result, I built an application that can handle more than 5,000 client requests per second.
          </p>
        </div>
      </div>
    </div>
  )
}