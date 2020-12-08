import React, { useState } from 'react'

function App() {
  const cols = {
    one: <ColOne />,
    two: <ColTwo />,
    three: <ColThree />,
  }

  const colsDisplay = ['one', 'two', 'one', 'two', 'one', 'three']

  return (
    <div className="flex font-black text-2xl h-screen">
      {colsDisplay.map((col, index) => (
        <React.Fragment key={index}>{cols[col]}</React.Fragment>
      ))}
    </div>
  )
}

function ColOne() {
  return (
    <div className="w-1/7 lg:w-1/16 bg-pink-100 text-pink-700 h-full flex items-center justify-center">
      <div className="transform rotate-90">
        <span className="lg:hidden">1/7</span>
        <span className="hidden lg:inline">lg:w-1/16</span>
      </div>
    </div>
  )
}

function ColTwo() {
  return (
    <div className="w-2/7 lg:w-3/16 bg-blue-100 text-blue-700 h-full flex items-center justify-center">
      <div className="transform rotate-90">
        <span className="lg:hidden">2/7</span>
        <span className="hidden lg:inline">lg:w-3/16</span>
      </div>
    </div>
  )
}

function ColThree() {
  return (
    <div className="w-2/7 lg:w-7/16 bg-green-100 text-green-700 h-full hidden lg:flex items-center justify-center">
      <div className="transform rotate-90">
        <span className="lg:hidden">2/7</span>
        <span className="hidden lg:inline">lg:w-7/16</span>
      </div>
    </div>
  )
}

export default App
