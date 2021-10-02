import {useState, useRef, useEffect} from 'react'

export default function useWord(START_TIME){

  const [text, setText] = useState("")
  const [count, setCount] = useState("")
  const [time, setTime] = useState(START_TIME)
  const [isRunning, setIsRunning] = useState(false)
  const textAreaEl = useRef(null)

  function handletextChange(event) {
    const {name, value} = event.target
    setText(value)
  }

  function countWord(words) {
    const wordArr = words.trim().split(" ")
    setCount(wordArr.filter( (word) => word !== "").length)

  }

  function startGame() {
    setIsRunning(true)
    setTime(START_TIME)
    setText("")
    textAreaEl.current.disabled = false
    textAreaEl.current.focus()
  }

  function endGame() {
    setIsRunning(false)
    countWord(text)
  }

  useEffect(function() {
    if (time > 0 && isRunning) {
      setTimeout( () => {
          setTime((prevTime) => prevTime - 1)
      },1000)
    }else if(time === 0){
      endGame()
    }
  },[time, isRunning])

  return {text,count,time,isRunning, handletextChange,startGame,textAreaEl}

}
