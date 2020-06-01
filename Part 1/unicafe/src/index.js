import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral
  const pos = good/total
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
      <div>
        <p><h2>Give Feedback</h2></p>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>
      <div>
        <p><h2>Statistics</h2></p>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {total}</p>
        <p>Average {avg}</p>
        <p>Positive {pos}</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
