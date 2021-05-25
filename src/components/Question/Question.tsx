import React from "react";

interface QuestionProps {
  questionText: string;
}

const Question: React.FC<QuestionProps> = ({ questionText }) => {
  return (
    <div className="question">
      <h4 className="question__text">
       {questionText}
      </h4>
    </div>
  )
}

export default Question;