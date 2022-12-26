import React from 'react';

export default function NavBar() {
  return (
    <nav className="bg-blueish fixed top-0 left-0 w-full z-1000">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
              <a className="flex flex-shrink-0 items-center scroll-smooth" href="#">
                <img className="hidden h-14 w-auto lg:block" src="A.png" alt="Your Company" />
              </a>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="#aboutMe" className="text-gray-100 hover:bg-purpleish hover:text-white px-3 py-2 rounded-md text-sm font-medium scroll-smooth">About Me</a>

                  <a href="#projects" className="text-gray-100 hover:bg-purpleish hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

                  <a href="https://www.linkedin.com/in/aaron-yabut/" className="text-gray-100 hover:bg-purpleish hover:text-white px-3 py-2 rounded-md text-sm font-medium" target="_blank">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">LinkedIn</a>
        </div>
      </div>
    </nav>
  )
}


    // <div className='shadow-md w-full fixed top-0 left-0 z-1000'>
    //   <h1 className='text-center md: flex bg-transparent backdrop-blur-xl py-4 px-20 text-white' >
    //     Aaron Yabut
    //   </h1>
    // </div>

