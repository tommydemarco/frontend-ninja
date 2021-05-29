import { useRef } from "react";
import { IonButton } from "@ionic/react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import "./TestQuestion.scss";

interface TestQuestionProps {
  question: string;
  code: string;
  language: string;
  answers: Answer[]
}

interface Answer {
  text: string;
  correct: boolean
}

const TestQuestion: React.FC<TestQuestionProps> = ({ question, code, answers, language }) => {

  const mixedAnswers = answers;
  const onClickAnswer = (correct: boolean) => {
    console.log("clicked answer", correct)
  }

  return (
    <div className="test-question">
      <h4 className="test-question__question">
       {question}
      </h4>
      <div className="test-question__code">
        <SyntaxHighlighter language={language} style={docco}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="test-question__answers">
        {mixedAnswers.map(answer => {
          return (
            <IonButton 
                className="test-question__answer"
                fill="solid"
                color="medium"
                expand="block"
                onClick={() => onClickAnswer(answer.correct)}
            >
              <span className="test-question__answer-label">{answer.text}</span>
            </IonButton>
          )
        })}
      </div>
    </div>
  )
}

export default TestQuestion;