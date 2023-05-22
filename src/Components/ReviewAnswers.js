import React from "react";
import { Link } from "react-router-dom";
import _ from 'lodash';
import {convertToNormalString} from './convertToNormalString';

//still in progress
//now is just showing all answers
const ReviewAnswers = ({answers, wrongAnswersAndQuestions,}) => {
    return (
        <div className="all_wrong_answers_and_questions">
            {wrongAnswersAndQuestions.map((question, index) => {
                return <div key={index}>
                    <div className='question'>
                        <h3>Question {question.number}</h3>
                        {convertToNormalString(question.question)}
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
                            return <div key={index} className={_.compact([userAnswer, rightAnswer]).join(' ')}>
                                <div>{convertToNormalString(answer)}</div>
                            </div>
                        })}
                    </div>
                </div>;
            })}

            
            <button >
                <Link to='/'>Play again</Link>
            </button>
        </div>
        
    );
}
 
export default ReviewAnswers;