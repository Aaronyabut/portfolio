// import React from 'react'

// export default function Outro () {
//   return (
//     <div className="text-center text-blueish">
//       <div>Built and designed by Aaron Yabut</div>
//       {/* <a href="" id="link" className="text-pinkish inline-block" target="_blank" rel="noreferrer">Read More</a> */}
//     </div>
//   )
// }

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Example() {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  return (
    <div className="text-center text-white">
      <div className="">Built and Designed by Aaron Yabut</div>
      <a id="link" className="text-pinkish inline-block mb-10 z-1001 cursor-pointer" onClick={() => setOpen(true)}>Read More</a>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-1001" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-blueish text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="flex flex-row-reverse mt-4 mr-6">
                    <button onClick={()=> setOpen(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="bg-blueish px-4 pb-6 sm:px-6 sm:pb-6">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-1 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-2xl font-medium leading-6 text-white">
                          Portfolio Information
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-md text-white">
                            This portfolio is built using&nbsp;
                            <a id="link" href="https://www.typescriptlang.org/docs/handbook/intro.html" target="_blank" className="inline-block">TypeScript</a>,&nbsp;
                            <a id="link" href="https://www.reactjs.org/" target="_blank" className="inline-block">React.js</a>, and&nbsp;
                            <a id="link" href="https://tailwindcss.com/" target="_blank" className="inline-block">TailwindCSS</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-blueish shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-blueish px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                      >
                      Cancel
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}