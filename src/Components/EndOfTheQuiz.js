import React from "react";

//working but still in progress
function EndOfTheQuiz({ score, handleReviewAnswersClick,}) {

    return (
            <div>
                <h2>That's the end of the quiz!</h2>
                
                <h3>Your score is {score}</h3>

                <button >
                    Play again
                </button>

                <p>OR</p>

                <button onClick={handleReviewAnswersClick}>
                    Review wrong answers
                </button>
            </div>
        );
}
 
export default EndOfTheQuiz;