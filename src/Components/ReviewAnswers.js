import React from "react";

//still in progress
//now is just showing all answers
const ReviewAnswers = ({answers}) => {
    return (
        <div className="all_answers">
            {answers.map((answer, index) => <div key={index}>{answer}</div>)}
        </div>
    );
}
 
export default ReviewAnswers;