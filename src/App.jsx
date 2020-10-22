import React, { useState } from 'react'

function App() {
  return (
    <div className="flex font-black text-3xl h-screen">
      <div className="w-1/7 bg-pink-100 text-pink-700 h-full flex items-center justify-center">
        <div className="transform rotate-90">
          1/7
        </div>
      </div>
      <div className="w-2/7 border-r border-l border-blue-200 bg-blue-100 text-blue-700 h-full flex items-center justify-center">
        <div className="transform rotate-90">
          2/7
        </div>
      </div>
      <div className="w-1/7 bg-pink-100 text-pink-700 h-full flex items-center justify-center">
        <div className="transform rotate-90">
          1/7
        </div>
      </div>
      <div className="w-2/7 border-r border-l border-blue-200 bg-blue-100 text-blue-700 h-full flex items-center justify-center">
        <div className="transform rotate-90">
          2/7
        </div>
      </div>
      <div className="w-1/7 bg-pink-100 text-pink-700 h-full flex items-center justify-center">
        <div className="transform rotate-90">
          1/7
        </div>
      </div>
    </div>
  )
}

export default App
