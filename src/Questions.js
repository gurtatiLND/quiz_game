import React from 'react';
import { useState, useEffect } from 'react';
import _ from 'lodash';

{/* Now everything about "questions" is here. 
I used useEffect like we did in last call. 
Added part which is show us all questions and answers. Specially for this I used a LODASH library.
Please install lodash if don't have it yet.
And I've created a Buttons folder where we can keep all button elements.*/}

const Questions = () => {

    const TRIVIA_API = 'https://opentdb.com/api.php?amount=10';
    const [quizData, setQuizData] = useState(null);
   
    useEffect(() => {
        fetch(TRIVIA_API)
            .then(res => {
               return res.json();
            })
            .then(data => {
               setQuizData(data);
            })
    }, []);

    return (
        <div className='questions'>
            {quizData != null
               ? quizData.results.map((question, index) => {
                return <div key={index}>
                      <div className='Question'>{index + 1}. {question.question}</div>
                      <select id="answers">
                        {_.shuffle([
                           question.correct_answer,
                            ...question.incorrect_answers,
                        ]).map((answer, index) => {
                           return <option key={index} value={answer}>{answer}</option>;
                        })}
                       </select>
                   </div>
               })
            : null
            }
        </div>
    );
}

export default Questions;