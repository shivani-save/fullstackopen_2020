import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
    <h1>{props.course}</h1>
    </div>
    )
}

const Part1 = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>
        {props.part2} {props.exercises2}
      </p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Content = (props) => {

  console.log("Part 1 "+props.part1);

  return (
    <div>
      <Part1 part1 = {props.part1.name} exercises1 = {props.part1.exercises}/>
      <Part2 part2 = {props.part2.name} exercises2 = {props.part2.exercises}/>
      <Part3 part3 = {props.part3.name} exercises3 = {props.part3.exercises}/>
    </div>
    )
}

const Total = (props) => {
  return (
    <div> 
      <p>
        Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
    )
}

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
  <Header course={course.name}/>
  <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]}/>
  <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))