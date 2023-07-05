import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value, text2}) => {
  return (
    <div>{text} {value} {text2}</div>
  )
}

const Statistics = (props) => {
  if(props.total === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{props.total}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(props.good - props.bad)/props.total}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{(props.good*100/props.total) + " %"}</td>
          </tr>
        </tbody>
      </table>
      {/* <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.total} />
      <StatisticLine text="average" value={(props.good - props.bad)/props.total} />
      <StatisticLine text="positive" value={(props.good*100/props.total) + " %"} /> */}
    </>
  )
}

const App = () => {

  const [good, incGood] = useState(0)
  const [neutral, incNeutral] = useState(0)
  const [bad, incBad] = useState(0)

  const handleGood = () => incGood(good + 1)
  const handleNeutral = () => incNeutral(neutral + 1)
  const handleBad = () => incBad(bad + 1)
  
  const total = good + neutral + bad

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </>
  )
}

export default App
