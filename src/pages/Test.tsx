import React, { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { 
  IonAlert,
  IonButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  useIonViewDidLeave, 
  useIonViewWillEnter} from "@ionic/react";

import { appContext, APP_ACTION_TYPES } from "../context/app"

import BlurredLayer from "../components/BlurredLayer";
import HealthModal from "../components/HealthModal";
import HealthStatus from "../components/HealthStatus";
import TestCountdown from "../components/TestCountdown";
import TestQuestion from "../components/TestQuestion";
import Timer from "../components/Timer";

import { test } from "../data/test-data"
import { arrowBack, checkmarkCircle } from "ionicons/icons";

import AnswerPopup from "../components/AnswerPopup";
import QuestionContainer from "../components/QuestionContainer";


const Test: React.FC = () => {

  const { appDispatch } = useContext(appContext)!

  const history = useHistory()

  const [ answerPopup, setAnswerPopup ] = useState<{ isCorrect: boolean | null }>({ isCorrect: null })
  const [ timer, setTimer ] = useState(20)
  const [ testCountdown, setTestCountdown ] = useState(true)
  const [ backAlert, setBackAlert ] = useState(false)
  const [ questionNumber, setQuestionNumber ] = useState(0)
  const [ currentQuestion, setCurrentQuestion ] = useState(test[questionNumber])

  const onClickAnswer = (isCorrect: boolean) => {
    if (isCorrect === true) setAnswerPopup({ isCorrect: true })
    else setAnswerPopup({ isCorrect: false })
  }

  useEffect(() => {
    if(answerPopup.isCorrect === null) return;
    setTimeout(() => setAnswerPopup({ isCorrect: null }), 900)
  }, [answerPopup])
 
  useEffect(() => {
    appDispatch({ type: APP_ACTION_TYPES.SET_BOTTOM_NAVIGATION, payload: false })
    setTimeout(() => {
      setTestCountdown(false)
    }, 5000)
  }, [appDispatch])

  useIonViewDidLeave(() => {
    appDispatch({ type: APP_ACTION_TYPES.SET_BOTTOM_NAVIGATION, payload: true })
  })

  const confirmExitTest = () => {
    setBackAlert(true)
  }

  useEffect(() => {
    setCurrentQuestion(test[questionNumber])
  }, [questionNumber])

  useIonViewWillEnter(() => {
    appDispatch({ type: APP_ACTION_TYPES.SET_LOADING_ALERT, payload: false })
  })

  return (
    <React.Fragment>
      <IonAlert 
        isOpen={backAlert}
        header="Go back?"
        message="If you go back now the test will be invalid
                and the results will not be saved"
        buttons={[
          { text: "cancel", role: "cancel", handler: () => setBackAlert(false)},
          { text: "yes, go back", role: "confirm", handler: () => history.goBack() }
        ]}
      />
      <HealthModal />
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonButton  onClick={confirmExitTest}>
                <IonIcon icon={arrowBack} slot="icon-only" />
              </IonButton>
            </IonButtons>
            <IonTitle>Title</IonTitle>
            <IonButtons slot="end">
              <HealthStatus />
              <IonMenuButton />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <QuestionContainer>
            <BlurredLayer active={testCountdown} />
            <Timer timer={timer} />
            <TestCountdown isOpen={testCountdown} setTestCountdown={setTestCountdown}/>
            <TestQuestion 
              question={currentQuestion.question}
              code={currentQuestion.code}
              language={currentQuestion.language}
              answers={currentQuestion.answers}
              onClickAnswer={onClickAnswer}
            />
          </QuestionContainer>
          <AnswerPopup className={answerPopup.isCorrect !== null ? "active" : "inactive" }>
            <IonIcon icon={checkmarkCircle} color="success" />
          </AnswerPopup>
        </IonContent>
      </IonPage>
    </React.Fragment>
  )
}

export default Test;