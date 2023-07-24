const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const initialValue = 0
  const sum = parts.reduce(
    (acc, part) => 
      (acc + part.exercises), initialValue
  )
  return (
    <p>Number of exercises {sum}</p>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(temp =>  
        <Part key={temp.id} part={temp} />
      )}
    </>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course