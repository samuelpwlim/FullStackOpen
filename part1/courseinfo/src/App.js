import { useState } from 'react'

// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   console.log('rendering app w/ counter', counter)

//   const increment = () => {
//     setCounter(counter + 1)
//     console.log("incremented!", counter)
//   }

//   const reset = () => {
//     setCounter(0)
//     console.log("reset clicked!", counter)
//   }

//   const decrement = () => {
//     setCounter(counter - 1)
//     console.log("deceremented!", counter)
//   }

//   return (
//     <>
//       <Display counter={counter} />
//       <Button handleClick={increment} text="Plus!"/>
//       <Button handleClick={reset} text="Reset me!" />
//       <Button handleClick={decrement} text="Minus!" />
//     </>
//   )
// }

// // const Display = ({counter}) => {
// //   return (
// //     <div>{counter}</div>
// //   )
// // }
// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({ handleClick, text }) => {
//   return (
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => 
  <button onClick={handleClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const newLeft = left + 1
    setLeft(newLeft)
    setTotal(newLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App
