import React from "react";

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

  export default Course;