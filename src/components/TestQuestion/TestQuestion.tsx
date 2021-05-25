import React from "react";

import "./TestQuestion.scss";

interface TestQuestionProps {
  question: string;
  code: string;
  answers: Answer[]
}

interface Answer {
  text: string;
  correct: boolean
}

const TestQuestion: React.FC<TestQuestionProps> = ({ question, code, answers }) => {

  const mixedAnswers = answers;

  const onClickAnswer = (correct: boolean) => {
    console.log("clicked answer", correct)
  }

  return (
    <div className="test-question">
      <h4 className="test-question__question">
       {question}
      </h4>
      <code>
        {code}
      </code>
      <div className="test-question__answers">
        {mixedAnswers.map(answer => {
          return (
            <div 
                className="test-question__answer" 
                onClick={() => onClickAnswer(answer.correct)}
            >
              {answer.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TestQuestion;