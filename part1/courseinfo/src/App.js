const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  let total = 0
  course.parts.forEach(element => {
    total += element.exercises
  });

  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.parts[0].name} {course.parts[0].exercises}</p>
      <p>{course.parts[1].name} {course.parts[1].exercises}</p>
      <p>{course.parts[2].name} {course.parts[2].exercises}</p>
      <p>Number of exercises {total}</p>
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