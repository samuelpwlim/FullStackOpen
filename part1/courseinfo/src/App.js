const App = () => {
  const course = 'Half Stck application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const parts = [part1, part2, part3]
  

  return (
    <div>
      <Header course={course}/>
      <Content props={parts}/>
      <Total props={parts}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = ({props}) => {
  return (
    <div>
      <Part words={props[0].name} num={props[0].exercises}/>
      <Part words={props[1].name} num={props[1].exercises}/>
      <Part words={props[2].name} num={props[2].exercises}/>
    </div>
  )
}

const Total = ({props}) => {
  return (
    <div>
      <p>Number of exercises {props[0].exercises + props[1].exercises + props[2].exercises}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.words} {props.num}</p>
    </div>
  )
}

export default App