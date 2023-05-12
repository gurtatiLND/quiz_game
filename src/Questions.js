import React from 'react'
// import Question from './Question'

function Questions({ questions }) {
    // const [questions, setQuestions] = useState(questions)

  return (
    <>
        <div>Questions</div>
        {console.log(questions)}
        <div>
            {questions.map(question => (
                <div>{question}</div>
            ))}
        </div>
        {/* <div>
            {questions.map(e => (
                <Question question={e}/>
            ))}
        </div> */}
        {/* we need to iterate through questions and load each Question component */}
    </>
  )
}

export default Questions