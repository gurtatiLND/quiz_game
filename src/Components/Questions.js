import React from 'react';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import EndOfTheQuiz from './EndOfTheQuiz';
import ReviewAnswers from './ReviewAnswers';
import {convertToNormalString} from '../Utils/convertToNormalString';
import fetchQuestions from '../api/fetchQuestions';

function Questions({ difficulty, category }) {
    const [quizData, setQuizData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0); // this state is for score, will count the correct answer
    const [isPending, setIsPending] = useState(false); // this state is for 'Loading status'
    const [answers, setAnswers] = useState([]); //this state is for saving all answers in one array
    const [wrongAnswersAndQuestions, setwrongAnswersAndQuestions] = useState([]);

    //put everything which is related to the fetch inside this function
    useEffect(() => {
        //const TRIVIA_API_URL = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;
        const handleFetchData = async () => {
            //before the data will be fetched we set the state of 'ispending' on true
            setIsPending(true);
            const data = await fetchQuestions({
                category,
                difficulty,
            });
            console.log(data);
            setQuizData(data.results); //in this place I assign once  data.results to the quizData, so don't need to write data.results all the time

            //when we get the data we set the state of 'ispending' on false
            setIsPending(false);
        };

        handleFetchData();
    }, [category, difficulty]);

    const handleChoiceClick = (answer) => {
        
        //add answers to array
        setAnswers([
            ...answers,
            convertToNormalString(answer),
        ]);
  
        //implement add point if choice is correct
        if (quizData[currentIndex].correct_answer === answer) {
            setScore(score + 1);
        } else {
            let questionWithWrongAnswer = quizData[currentIndex].question;
            let correct_answer = quizData[currentIndex].correct_answer;
            let incorrect_answers = quizData[currentIndex].incorrect_answers;
            let objWithQuesAndAnswer = {
                'number': currentIndex + 1,
                'question': questionWithWrongAnswer, 
                'good_answer': correct_answer,
                'bad_answers': incorrect_answers,
            };
            setwrongAnswersAndQuestions([
                ...wrongAnswersAndQuestions,
                objWithQuesAndAnswer,
            ])
            
        }

        //change the index of question
        const nextIndex = currentIndex + 1;
        if (nextIndex < quizData.length) {
            setCurrentIndex(nextIndex);
        } else {
            console.log("end");
        }
        console.log(wrongAnswersAndQuestions);
    };

    //create state for answers
    const [showReviewAnswers, setShowReviewAnswers] = useState(false);
    
    const handleReviewAnswersClick = () => {
        setShowReviewAnswers(true);
    };

    return (
        <div className='questions'>
            {/* below I use conditional templating.
            In this expression we read: if 'isPending' is true than show "Loading ..." */}
            {isPending && <div>Loading ...</div>}
            {quizData != null && answers.length < quizData.length && <>
                <div className='question'>
                    <h3>Question {currentIndex + 1}</h3>
                    {convertToNormalString(quizData[currentIndex].question)}
                </div>
                <div className='answers'>
                    {_.shuffle([
                        quizData[currentIndex].correct_answer,
                        ...quizData[currentIndex].incorrect_answers
                    ]).map((answer, index) => (
                        <p key={index}>
                            <button  onClick={() => handleChoiceClick(answer)}>{convertToNormalString(answer)}</button>
                        </p>
                    ))}
                </div>
            </>}

            {/* in this part we: 
               1.show the component "EndOfTheQuiz"(with props inside) if the quizData not null 
            and the length of array 'answers' the same like the lenght of 'quizData' and user doesn't want to see his results;
               2.if user want to see his results then will work 'ReviewAnswers' component */}
            {(quizData != null && answers.length === quizData.length && !showReviewAnswers) && <EndOfTheQuiz
                score={score}
                handleReviewAnswersClick={handleReviewAnswersClick}/>
            }
            {showReviewAnswers && <ReviewAnswers answers={answers} wrongAnswersAndQuestions={wrongAnswersAndQuestions}/>}
        </div>
    );
}

export default Questions;