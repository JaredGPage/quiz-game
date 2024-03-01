import React, { useState } from "react";
import { questions } from "../../data/data";
import Card from "../avatar-card/avatar-card";
import { useLocation, Link } from "react-router-dom";
import "./quiz.styles.css";
// import Result from "../result/result";//decided not to use

const Quiz = () => {
  //retrieve avatar and accessory
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const avatar = searchParams.get("avatar");
  const accessory = searchParams.get("accessory");

  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false); // Control when to show questions

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      const currentTime = new Date().getTime();
      const timeTaken = currentTime - startTime;
      
      let newScore = score + (10000 - timeTaken);
      if (newScore < 0) {//ensure value doesn't go into negatives
        newScore = 1;
      }
      setScore(newScore);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setStartTime(new Date().getTime()); // Start timer for the next question
  };

//initiated when quiz starts and for each quesiton to reset the timers
  const startQuiz = () => {
    setCurrentQuestionIndex(0); 
    setScore(0);
    setStartTime(new Date().getTime());
    setShowQuestions(true); // Show questions after clicking Start Quiz
  };

  return (

    <div>
      <h2 className="select-title">Questions!</h2>

      {/* <Result score={score}/> */}
      {/* Display avatar and accessory/boarder */}
      <Card avatar={avatar} accessory={accessory} />

      {!startTime && currentQuestionIndex < questions.length && (
        // Set initial start and run the timer
        <div>
          <h2>This quiz is scored depending on how fast you answer correctly.</h2>
          <h2>Press start quiz when you are ready to begin!</h2>
          <button className="button" onClick={startQuiz}>Start Quiz</button>
        </div>
      )}

      {showQuestions && currentQuestionIndex < questions.length ? (
        // display question, answers and set correct answer
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button className="button" key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : null}
      {/* check if quiz complete and show result */}
      {showQuestions && currentQuestionIndex >= questions.length && (
        <div>
          <h2>Quiz Completed!</h2>
          <h3>Your score is: {score} / {questions.length*10000}</h3>
          <Link to="/">Back to Select Avatar Page</Link>
        </div>
      )}
      
    </div>
  );
};

export default Quiz;