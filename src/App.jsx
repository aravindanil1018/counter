import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // state creation // var count=0
  const [count,setCount]=useState(0)

     function incrementCount(){
      // ncrement the value by one
      setCount(count+1)
     }

     function DecrementCount(){
      // decrement the value till 0
      if(count!=0)
      setCount(count-1)
     }
     function ResetCount(){
      // reset to 0
      setCount(0)
     }

  return (
    <div className='bg-black '>
      <div className='d-flex flex-column justify-content-center align-items-center vh-100 text-light'>
        <h1 >Counter Application</h1>
      <h3> Total Count= {count}</h3>
      <button onClick={incrementCount} className='btn btn-primary m-4 '>Increment</button>
      <button onClick={DecrementCount} className='btn btn-danger m-4 '>Decrement</button>
      <button onClick={ResetCount} className='btn btn-success m-4 '>Reset</button>
      </div>
    </div>
  )
}


export default App
