import React from "react";
import { Link } from "react-router-dom";
import {convertToNormalString} from './convertToNormalString';
import "./ReviewAnswers.css";

// refactored
const ReviewAnswers = ({answers, wrongAnswersAndQuestions,}) => {
    return (
        <div className="all_wrong_answers_and_questions">
            {wrongAnswersAndQuestions.map((question, index) => {

                let wrongAns=answers[question.number - 1];

                const rightAns=convertToNormalString(question.good_answer);

                let otherAns = question.bad_answers;
                console.log(otherAns)

                let indexofwrong = otherAns.indexOf(wrongAns);
                delete otherAns[indexofwrong];

                otherAns = otherAns.filter( String);
                console.log(otherAns)

                const eachOtherAns = otherAns.map((ans) => 
                    <p className = "otherAnswers">{convertToNormalString(ans)}</p>)
                wrongAns = convertToNormalString(wrongAns);

                return <div key={index}>
                        <h3>Question {question.number}</h3>
                        <p>{convertToNormalString(question.question)}</p>
                        <p className = "wrongAnswer">{wrongAns}</p>
                        <p className = "rightAnswer">{rightAns}</p>
                        <p >{(eachOtherAns)}</p>
                    </div>

            })}

            <button >
                <Link to='/'>Play again</Link>
            </button>
        </div>
        
    );
}
 
export default ReviewAnswers;