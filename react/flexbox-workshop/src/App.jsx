import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className="App">
        <div className="flexbox-container learning-objectives">
          <h1>Learning Objectives</h1>
          <ul>
            <li>Explain the basic concepts of CSS flexbox layout</li>
            <li>Implement flexbox in your React and Vanilla JS projects</li>
            <li>Arrange elements horizontally and vertically using flexbox properties</li>
          </ul>
        </div>
        <div className='flexbox-container what-is-flexbox'>
          <h1>What is FLEXBOX?</h1>
          <ul>
            <li>Flexbox is a css layout model that allows you to easily arrange elements horizontally and vertically.</li>
            <li>It provides more control over the placement of elements compared to traditional methods.</li>
            <li>Flexbox is responsive, meaning your layouts will adapt to different screen sizes.</li>
          </ul>
        </div>

        <div className="flexbox-container">
          <h1>Row Practice</h1>
          <ul className="flex-row">
            <li>element 1</li>
            <li>element 2</li>
            <li>element 3</li>
            </ul>
        </div>

      </div>
    </>
  )
}

export default App
