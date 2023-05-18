import React from "react";
import { Link } from "react-router-dom";

//still in progress
//now is just showing all answers
const ReviewAnswers = ({answers}) => {
    return (
        <div className="all_answers">
            {answers.map((answer, index) => <div key={index}>{answer}</div>)}
            <button >
                    <Link to='/'>Play again</Link>
                </button>
        </div>
        
    );
}
 
export default ReviewAnswers;