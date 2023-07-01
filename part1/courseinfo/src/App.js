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

  return (
    <div>
      <Header course={course.name} />
      <Content props={course.parts} />
      <Total props={course.parts} />
    </div>
  )
}

const Header = (props) => {
  // console.log(props)
  return <h1>{props.course}</h1>
}


const Part = (props) => {
  // console.log(props)
  return <p>{props.part} {props.exercise}</p>
}

const Content = ({props}) => {
  // console.log(props)
  return (
    <>
      <Part part={props[0].name} exercise={props[0].exercises} />
      <Part part={props[1].name} exercise={props[1].exercises} />
      <Part part={props[2].name} exercise={props[2].exercises} />
    </>
  )
}

const Total = ({props}) => {
  // console.log(props)
  return (
    <p>
      Number of exercises {props[0].exercises + props[1].exercises + props[2].exercises}
    </p>
  )
}

export default App