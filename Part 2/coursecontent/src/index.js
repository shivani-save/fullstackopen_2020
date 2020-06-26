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
      {props.parts.map(({id, name, exercises}) => (
        <Part key={id} pname={name} exercises={exercises} />
      ))}
    </div>
    )
}

const Total = (props) => {
  return (
    <div> 
      <p>
        Total of {props.parts.reduce((total, part) =>
          total + part.exercises,0)} exercises
      </p>
    </div>
    )
}
const Course = ({course}) => {
  return (
    <div>
      <Header header = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  // return <Course course={course} />

  return (
    <div>
      {courses.map(course => (
        <Course course={course} /> 
      ))}
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))