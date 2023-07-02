import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering app w/ counter', counter)

  const increment = () => {
    setCounter(counter + 1)
    console.log("incremented!", counter)
  }

  const reset = () => {
    setCounter(0)
    console.log("reset clicked!", counter)
  }

  const decrement = () => {
    setCounter(counter - 1)
    console.log("deceremented!", counter)
  }

  return (
    <>
      <Display counter={counter} />
      <Button handleClick={increment} text="Plus!"/>
      <Button handleClick={reset} text="Reset me!" />
      <Button handleClick={decrement} text="Minus!" />
    </>
  )
}

// const Display = ({counter}) => {
//   return (
//     <div>{counter}</div>
//   )
// }
const Display = ({counter}) => <div>{counter}</div>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

export default App
