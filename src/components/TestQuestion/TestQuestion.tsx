import React from "react";

interface TestQuestionProps {
  question: string;
  code: string;
  answers: Answer[]
}

interface Answer {
  text: string;
  correct: boolean
}

const TestQuestion: React.FC<TestQuestionProps> = ({ question }) => {
  return (
    <div className="test-question">
      <h4 className="test-question__question">
       {question}
      </h4>
    </div>
  )
}

export default TestQuestion;