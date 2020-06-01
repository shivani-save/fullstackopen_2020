import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
return (
<div>
    <p><h2>Statistics</h2></p>
    <p>Good {props.good}</p>
    <p>Neutral {props.neutral}</p>
    <p>Bad {props.bad}</p>
    <p>All {props.total}</p>
    <p>Average {props.avg}</p>
    <p>Positive {props.pos}%</p>
</div>
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
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
        <Statistics good={good} bad={bad} neutral={neutral} total={total} avg={avg} pos={pos}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
