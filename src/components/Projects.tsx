import React from 'react';
import ReadingRainforest from './data/ReadingRainforest';
import SystemDesign from './data/SystemDesign';
import Atelier from './data/Atelier';
import FaangMan from './data/FaangMan';

export default function Projects () {
  return (
    <div className="flex justify-center mx-14">
      <div className="w-1100 ">
        <div className="w-50">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500/100 to-pinkish">
          projects
          </h1>
        </div>
        <div className="mb-20">
          <ReadingRainforest />
        </div>
        <div className="mb-20">
          <SystemDesign />
        </div>
        <div className="mb-20">
          <Atelier />
        </div>
        {/* <div className="mb-20">
          <FaangMan />
        </div> */}

      </div>
    </div>
  )
}