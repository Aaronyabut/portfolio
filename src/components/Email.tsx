import React from 'react';

export default function Email () {
  return (
    <div className="">
      <div className="p-4 mb-40 rotate-90 text-white  border-pinkish">
        <address className="text-white">
          <a href="mailto:aaron.u.yabut@gmail.com" className="hover:text-pinkish">aaron.u.yabut@gmail.com</a>
        </address>
      </div>
      <div className="p-0 ">
        <svg id="chart" width="300" height="175" stroke="white" strokeWidth="1">
          <line x1="28" y1="20" x2="28" y2="175"></line>
        </svg>
      </div>

    </div>
  )
}