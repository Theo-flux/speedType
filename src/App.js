import React, {useState, useRef, useEffect} from 'react'
import './App.css';
import useWord from './hooks/useWord'

function App() {

  const {
    text,
    count,
    time,
    isRunning,
    handletextChange,
    startGame,
    textAreaEl
  } = useWord(10)

  return (
    <div className="App">
      <main>
        <h1>How fast do you type?</h1>

        <textarea
          ref={textAreaEl}
          disabled = {!isRunning}
          value={text}
          name = 'text'
          onChange = {handletextChange}
        />

        <h4>Time Remaining: {time}</h4>
        <button disabled={isRunning} onClick={() => startGame()}>START</button>

        <h1>Word Count: {count} </h1>
      </main>
    </div>
  );
}

export default App;
