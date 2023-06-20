import React, { useState } from 'react';
import './Quiz.css';
import questions from "./QuizData";
import QuizResult from './QuizResult';

export const Quiz = () => {
    const [currentQuestion, setcurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [correctAns, setcorrectAns] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [clicked, setClicked] = useState(false)
    const handleNextQuestion = () => {
        setClicked(false)
        const nextQuestion = currentQuestion+1
        if(nextQuestion<questions.length){
            setcurrentQuestion(nextQuestion)
        } else {
            setShowResult(true)
        }        
    }
    const handleAnswerOptions = (isCorrect) => {
        if(isCorrect){
            setScore(score+5)
            setcorrectAns(correctAns+1)
        }
        setClicked(true)
    }
    const handlePlayAgain = () => {
        setScore(0)
        setcorrectAns(0)
        setShowResult(false)
        setcurrentQuestion(0)
    }
   
    return (
        <>
            <div className='app'>
                {showResult?(
                <QuizResult score={score} correctAns={correctAns} handlePlayAgain={handlePlayAgain}/>
                ):( 
                <>
                <div className='question-section'>
                    <h5>Score: {score}</h5>
                    <div className='question-count'>
                        <span>Question {currentQuestion+1} of {questions.length}</span>
                    </div>
                    <div className="question-text">{questions[currentQuestion].questionText}</div>
                </div>

                <div className='answer-section'>
                    {questions[currentQuestion].answerOptions.map((ans, i) => {
                        return (<button className={`button ${clicked && ans.isCorrect ? "correct":"button"}`} disabled={clicked} onClick={()=>handleAnswerOptions(ans.isCorrect)} key={i}>{ans.answerText}</button>)
                    }
                    )}
                    <div className='actions'>
                        <button onClick={handlePlayAgain}>Quit</button>
                        <button disabled={!clicked} onClick={handleNextQuestion}>Next</button>
                    </div>
                </div>
                </>
                )}
               
            </div>
        </>
    );
};
