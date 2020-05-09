import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <>
    <button onClick={props.handleGoodClick}>Good</button>
      <button onClick={props.handleNeutralClick}>Neutral</button>
        <button onClick={props.handleBadClick}>Bad</button>
        </>
)

const StatisticLine = props =>
<tr>
  <td>{props.text}</td>
  <td>{props.value}{props.text2}</td>
</tr>

const Statistics = (props) => {
  

  if (props.allClicks === 0) {
    return (
      <>
        No feedback given
      </>
    )
  }

 

  return (
    <table>
      <tbody>
      <StatisticLine text="good " value={props.good}/>
      <StatisticLine text="neutral " value={props.neutral}/>
      <StatisticLine text="bad " value={props.bad}/>
      <StatisticLine text="all " value={props.allClicks}/>
      <StatisticLine text="average " value={props.average}/>
      <StatisticLine text="positive " value={props.positive} text2=" %"/>
      </tbody>
    </table>
  )
}



const App = (props) => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [average, setAverage] = useState(0)


  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
    setAverage(average + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
    setAverage(average - 1)
  }
  
  return (
    <div>
      <h1> give feedback</h1>
      <Button
      handleGoodClick={handleGoodClick}
      handleNeutralClick={handleNeutralClick}
      handleBadClick={handleBadClick}/>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text={props.text} value={props.value}/>
        </tbody>
      </table>

      <Statistics 
      allClicks={allClicks}
      good={good}
      neutral={neutral}
      bad={bad}
      average={average / allClicks}
      positive={good / allClicks * 100}/>
      
      </div>
      
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)