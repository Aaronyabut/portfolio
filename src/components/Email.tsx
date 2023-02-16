import React from 'react';

export default function Email () {
  return (
    <div className="">
      <div className="p-4 mb-40 rotate-90 text-white hover:-translate-y-2 duration-300">
        <address className="">
          <a href="mailto:aaron.u.yabut@gmail.com" className="hover:text-pinkish">
            aaron.u.yabut@gmail.com
          </a>
        </address>
      </div>
      <div className="p-0 ">
        <svg id="chart" width="300" height="175" stroke="white" strokeWidth="1">
          <line x1="31" y1="20" x2="31" y2="175"></line>
        </svg>
      </div>

    </div>
  )
}