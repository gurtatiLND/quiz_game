{/* this component is absolutely "empty". 
I've just created it but didn't think about logic.
Please, keep going if you have an idea how to do it. */}

{/* I thought to use props from "Questions", but this is raw idea. */}
function Question({ quizData, title }) {

  return (
     <div className="Questions-list">
      <h2>{ title }</h2>
      { quizData }

     </div>
  )
}

export default Question;