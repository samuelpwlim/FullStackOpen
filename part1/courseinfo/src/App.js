import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Display = ({text, value, text2}) => {
  return (
    <div>{text} {value} {text2}</div>
  )
}

const App = () => {

  const [good, incGood] = useState(0)
  const [neutral, incNeutral] = useState(0)
  const [bad, incBad] = useState(0)

  const handleGood = () => incGood(good + 1)
  const handleNeutral = () => incNeutral(neutral + 1)
  const handleBad = () => incBad(bad + 1)
  
  const total = good + bad + neutral

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <h1>statistics</h1>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />

      <Display text="all" value={total} />
      <Display text="average" value={(good - bad)/total} />
      <Display text="positive" value={(good*100/total)} text2="%"/>

    </>
  )
}

export default App
