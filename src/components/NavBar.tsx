import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About Me', href: '#aboutMe', current: false, target: "" },
  { name: 'Projects', href: '#projects', current: false, target: "" },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aaron-yabut/', current: false, target: "_blank" }
]

function classNames(...classes:any[]):any {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-blueish fixed w-full z-1000">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purpleish hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a className="flex flex-shrink-0 items-center scroll-smooth" href="#">
                    <img
                      className="block h-16 w-auto lg:hidden"
                      src="https://raw.githubusercontent.com/Aaronyabut/portfolio/main/logoPic.png"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-16 w-auto lg:block"
                      src="https://raw.githubusercontent.com/Aaronyabut/portfolio/main/logoPic.png"
                      alt="Your Company"
                    />
                  </a>
                </div>

              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-purpleish text-white' : 'text-gray-100 hover:bg-purpleish hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        target={item.target}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-purpleish text-white' : 'text-gray-100 hover:bg-purpleish hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  target={item.target}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


// import React, {useState} from 'react';

// export default function NavBar() {

//   return (
//     <nav className="bg-blueish fixed top-0 left-0 w-full z-1000">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//             {/* <!-- Mobile menu button--> */}
//             <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//               <span className="sr-only">Open main menu</span>
//               {/* <!--
//                 Icon when menu is closed.

//                 Heroicon name: outline/bars-3

//                 Menu open: "hidden", Menu closed: "block"
//               --> */}
//               <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//               </svg>
//               {/* <!--
//                 Icon when menu is open.

//                 Heroicon name: outline/x-mark

//                 Menu open: "block", Menu closed: "hidden"
//               --> */}
//               <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
//             <a className="flex flex-shrink-0 items-center scroll-smooth" href="#">
//               <img className="hidden h-14 w-auto lg:block" src="https://raw.githubusercontent.com/Aaronyabut/portfolio/main/logoPic.png" alt="logo" />
//             </a>
//           </div>

//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <div className="relative ml-3">
//               <div className="hidden sm:ml-6 sm:block">
//                 <div className="flex space-x-4">
//                   <a href="#aboutMe" className="text-gray-100 hover:bg-purpleish hover:text-white px-3 py-2 rounded-md text-sm font-medium scroll-smooth">About Me</a>

//                   <a href="#projects" className="text-gray-100 hover:bg-purpleish hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

//                   <a href="https://www.linkedin.com/in/aaron-yabut/" className="text-gray-100 hover:bg-purpleish hover:text-white px-3 py-2 rounded-md text-sm font-medium" target="_blank">LinkedIn</a>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//       <div className="sm:hidden" id="mobile-menu">
//         <div className="space-y-1 px-2 pt-2 pb-3">
//           <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

//           <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

//           <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

//           <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">LinkedIn TEST</a>
//         </div>
//       </div>
//     </nav>
//   )
// }


    // <div className='shadow-md w-full fixed top-0 left-0 z-1000'>
    //   <h1 className='text-center md: flex bg-transparent backdrop-blur-xl py-4 px-20 text-white' >
    //     Aaron Yabut
    //   </h1>
    // </div>

// 640px