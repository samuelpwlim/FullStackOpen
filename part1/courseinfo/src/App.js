const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  const content = [
    { part: part1, exercises: exercises1 },
    { part: part2, exercises: exercises2 },
    { part: part3, exercises: exercises3 },
  ]

  return (
    <div>
      <Header course={course}/>
      <Content props={content}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = ({props}) => {
  console.log(props)
  return (
    <div>
      <Part words={props[0].part} num={props[0].exercises}/>
      <Part words={props[1].part} num={props[1].exercises}/>
      <Part words={props[2].part} num={props[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.words} {props.num}</p>
    </div>
  )
}

export default App