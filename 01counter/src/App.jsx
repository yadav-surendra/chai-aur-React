import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

 //let counter = 10

  const addValue = () =>{
    //console.log("value added", counter)
    //counter = counter + 1
    if(counter < 20)
    {
      counter = counter + 1
    }
    else{
      counter = 20
    }
    setCounter(counter)
  }
  const minusValue = () =>{
    //console.log("value deducted", counter)
    //counter = counter - 1
    //here i have used 2 methods to update value in these functions for better understanding of the concepts
    if(counter > 0){
      //counter = counter - 1
      setCounter(--counter)
    }
    else{
      counter = 0
    }
    //setCounter(counter)
  }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button 
      className='button'
        onClick = {addValue}
      >Increse Value</button>

      <button className='button' onClick = {minusValue} 
      >Decrease Value</button>

    </>
  )
}

export default App
