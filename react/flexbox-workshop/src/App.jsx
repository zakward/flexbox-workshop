import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className="App">
        <h1>Flex Box Workshop</h1>
        <h2>flex-direction</h2>
        <div className="flexbox-container direction">
          <p className="one"> 1</p>
          <p className="two"> 2</p>
          <p className="three"> 3</p>
          <p className="four"> 4</p>
          <p className="five"> 5</p>
        </div>
        <h2>flex-wrap</h2>
        <div className='flexbox-container wrap'>
          <p className="one"> 1</p>
          <p className="two"> 2</p>
          <p className="three"> 3</p>
          <p className="four"> 4</p>
          <p className="five"> 5</p>
        </div>
        <h2>flex-flow</h2>
        <div className='flexbox-container flow'>
          <p className="one"> 1</p>
          <p className="two"> 2</p>
          <p className="three"> 3</p>
          <p className="four"> 4</p>
          <p className="five"> 5</p>
        </div>
        <h2>justify-content // align-items</h2>
        <div className='flexbox-container justify'>
          <p className="one"> 1</p>
          <p className="two"> 2</p>
          <p className="three"> 3</p>
          <p className="four"> 4</p>
          <p className="five"> 5</p>
        </div>
        <h2>gap</h2>
        <div className='flexbox-container gap'>
          <p className="one"> 1</p>
          <p className="two"> 2</p>
          <p className="three"> 3</p>
          <p className="four"> 4</p>
          <p className="five"> 5</p>
        </div>
        <h2>align-self</h2>
        <div className='flexbox-container align'>
          <p className="one"> 1</p>
          <p className="two"> 2</p>
          <p className="three"> 3</p>
          <p className="four"> 4</p>
          <p className="five"> 5</p>
        </div>
        <h2>flex within flex</h2>
        <div className='flexbox-container flex-within'>
          <div className="five inner-one"> 
            <p>one</p>
            <p>two</p>
            <p>three</p>
            <p>four</p>
            <p>five</p>
          </div>
          <div className="five inner-two"> 
            <p>one</p>
            <p>two</p>
            <p>three</p>
            <p>four</p>
            <p>five</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
