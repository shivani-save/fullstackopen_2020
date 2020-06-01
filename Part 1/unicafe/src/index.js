import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  if (props.text == "Positive") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.counter}%</td>
      </tr>
    )
  }
  else {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.counter}</td>
      </tr>
      )
  } 
}

const Statistics = (props) => {
if (props.total === 0) {
  return (
    <p>Click on a button to submit feedback</p>
  )
}
else {
  return (
    <div>
        <p><h2>Statistics</h2></p>
        <Statistic text="Good" counter={props.good}></Statistic>
        <Statistic text="Neutral" counter={props.neutral}></Statistic>
        <Statistic text="Bad" counter={props.bad}></Statistic>
        <Statistic text="Total" counter={props.total}></Statistic>
        <Statistic text="Average" counter={props.avg}></Statistic>
        <Statistic text="Positive" counter={props.pos}>%</Statistic>
    </div>
    )
 }
}

const Button = (props) => {
return(
  <button onClick={props.click}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral
  const pos = (good/total)*100
  const avg = (good*1 + bad*(-1))/total
  

  const handleGood = () => {
    setGood(good+1)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
  }
  const handleBad = () => {
    setBad(bad+1)
  }

  return (
    <div>
        <p><h2>Give Feedback</h2></p>
        <Button text="good" click={handleGood}></Button>
        <Button text="neutral" click={handleNeutral}></Button>
        <Button text="bad" click={handleBad}></Button>
        <Statistics good={good} bad={bad} neutral={neutral} total={total} avg={avg} pos={pos}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

   {/* <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button> */}