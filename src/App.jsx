import { useState } from 'react'
import './App.css'


function App() {
  const [color, setcolor] = useState('orange')

  function red(){
    setcolor('red')
  }
  function green(){
    setcolor('green')
  }
  function yellow(){
    setcolor('yellow')
  }
  function gray(){
    setcolor('gray')
  }
 
1
  return (
    <>
    
    <div style={{backgroundColor:color}}>
    <button onClick={red} style={{backgroundColor:'red'}}>Red</button>
    <button onClick={green} style={{backgroundColor:'green'}}>Green</button>
    <button onClick={yellow} style={{backgroundColor:'yellow'}}>Yellow</button>
    <button onClick={gray} style={{backgroundColor:'gray'}}>Gray</button>
    </div>
      
    </>
  )
}

export default App
