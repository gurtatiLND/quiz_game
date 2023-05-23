import React from "react";
import { Link } from "react-router-dom";
import _ from 'lodash';
import {convertToNormalString} from './convertToNormalString';
import "./ReviewAnswers.css";

//still in progress
//now is just showing all answers
const ReviewAnswers = ({answers, wrongAnswersAndQuestions,}) => {
    return (
        <div className="all_wrong_answers_and_questions">
            {wrongAnswersAndQuestions.map((question, index) => {
                return <div key={index}>
                    <div className='question'>
                        <h3>Question {question.number}</h3>
                        <p>{convertToNormalString(question.question)}</p>
                    </div>
                    <div className='answers'>
                        {_.shuffle([
                            question.good_answer,
                            ...question.bad_answers
                        ]).map((answer, index) => {
                            const userAnswer = answer === answers[question.number - 1]
                                ? 'user_answer'
                                : null;
                            const rightAnswer = answer === question.good_answer
                                ? 'correct_answer'
                                : null;

                            let wrongans=convertToNormalString(answers[question.number - 1]);
                            console.log(wrongans);
                            let rightans=convertToNormalString(question.good_answer);
                            console.log(rightans);
                            let otherans = question.bad_answers;
                            let indexofwrong = otherans.indexOf(wrongans);
                            delete otherans[indexofwrong];
                            let otherans2 = otherans.filter( String);
                            console.log(otherans2);

                            return (
                                <div>
                                    <p className = "wrongAnswer">{wrongans}</p>
                                    <p className = "rightAnswer">{rightans}</p>
                                    <div key={index}>
                                        <div><p>{otherans2}</p></div>
                                    </div>
                                </div>
                                
                            )

/*                             return <div key={index} className={_.compact([userAnswer, rightAnswer]).join(' ')}>
                                <div>{convertToNormalString(answer)}</div>
                            </div>  */
                        })}
                    </div>
                </div>;
            })}

            <p/>
            <button >
                <Link to='/'>Play again</Link>
            </button>
        </div>
        
    );
}
 
export default ReviewAnswers;