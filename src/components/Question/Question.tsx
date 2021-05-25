import React from "react";

interface QuestionProps {
  questionText: string;
}

const Question: React.FC<QuestionProps> = ({ questionText }) => {
  return (
    <div>
      <h4>
       {questionText}
      </h4>
    </div>
  )
}

export default Question;