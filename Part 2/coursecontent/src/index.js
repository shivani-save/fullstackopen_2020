import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
    <h1>{props.header}</h1>
    </div>
    )
}

const Part = (props) => {
  return (
    <div>
      {props.pname} {props.exercises}
    </div>
  )
}
const Content = (props) => {

  return (
    <div>
      {props.parts.map(({ id, exercises, name }) => (
        <Part key={id} pname={name} exercises={exercises} />
      ))}
    </div>
    )
}

const Course = ({course}) => {
  return (
    <div>
      <Header header = {course.name}/>
      <Content parts = {course.parts}/>
    </div>
  )
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))