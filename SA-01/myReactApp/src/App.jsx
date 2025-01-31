import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () =>{
    //Gives the number of times clicked
    alert(`You clicked this button ${count} times`)
    setCount(count + 1)
  }

  return (
    <>

     <button onClick={handleClick}>Click Me </button>
    </>
  )
}

export default App
