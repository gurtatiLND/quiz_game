import React from "react";
import { Link } from "react-router-dom"

//working but still in progress
function EndOfTheQuiz({ score, handleReviewAnswersClick,}) {

    return (
            <div>
                <h3>That's the end of the quiz!</h3>
                <p/>
                    <h1>Your score is {score}</h1>
                <p/>
                <div className='review_wrong_answers'>
                    {score === 10 && <>
                        <h1>Congratulations!</h1>
                        <button >            
                            <Link to='/'>Play again</Link>
                        </button>
                    </>
                    }
                    {score < 10 && <>
                        <button >
                            <Link to='/'>Play again</Link>
                        </button>
                        <p>
                            OR
                        </p>
                        <button onClick={handleReviewAnswersClick}>
                            Review wrong answers
                        </button>
                    </>
                    }
                </div>
            </div>
        );
}
 
export default EndOfTheQuiz;