import React from 'react';
import { useState, useEffect } from 'react';
import _ from 'lodash';

const Questions = ({difficulty, category}) => {

    const TRIVIA_API_URL = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;
    const [quizData, setQuizData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleFetchData = async () => {
        await fetch(TRIVIA_API_URL)
            .then(response => response.json())
            .then(data => setQuizData(data))
    }
   
    useEffect(() => {
        handleFetchData()
    }, []);

    const handleChoiceClick = () => {
        // to do: implement add point if choice is correct

        const nextIndex = currentIndex + 1
        nextIndex < quizData.results.length ? setCurrentIndex(nextIndex) : console.log("end")
    }

    return (
        <div className='questions'>
        {    console.log(quizData)}
            <div className='question'>
                {quizData != null
                    ? quizData.results[currentIndex].question
                    : null
                }
            </div>
            <div className='answers'>
                {quizData != null
                    ? _.shuffle([
                    quizData.results[currentIndex].correct_answer,
                    ...quizData.results[currentIndex].incorrect_answers
                    ]).map((answer, index) => (
                        <button key={index} onClick={() => handleChoiceClick(answer)}>{answer}</button>
                    ))
                    : null
                }
            </div>
        </div>
    );
}

export default Questions;