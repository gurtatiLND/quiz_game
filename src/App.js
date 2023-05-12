import './App.css';
import { useState, useEffect } from 'react';
import Questions from './Questions';

function App() {
  const URL = 'https://opentdb.com/api.php?amount=10'
  const [data, setData] = useState("test")

  useEffect(() => {
    fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setData(data)
    })
  }, [])

  const getQuestions = () => {
    return data.results.map(item => (
      <li>{item.question}</li>
    ))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>{console.log(data.results)}</div>
        {/* <div>
          {dataTest.map(e => (
            <p>{e.name}</p>
          ))}
        </div> */}
        <div>
          {data.results.map(item => (
            <p>{item.question}</p>
          ))}
        </div>
  
        <Questions questions={getQuestions()} />
      </header>
    </div>
  );
}

export default App;
