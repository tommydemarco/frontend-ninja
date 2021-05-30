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
  IonModal, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  useIonViewDidLeave } from "@ionic/react";

import { appContext, APP_ACTION_TYPES } from "../context/app"

import BlurredLayer from "../components/BlurredLayer";
import HealthModal from "../components/HealthModal";
import HealthStatus from "../components/HealthStatus";
import TestCountdown from "../components/TestCountdown";
import TestQuestion from "../components/TestQuestion";
import Timer from "../components/Timer";

import { test } from "../data/test-data"
import { arrowBack } from "ionicons/icons";
import QuestionContainer from "../components/QuestionContainer";

const Login: React.FC = () => {

  const { appDispatch } = useContext(appContext)!

  const history = useHistory()

  const [ testCountdown, setTestCountdown ] = useState(true)
  const [ backAlert, setBackAlert ] = useState(false)
  
  useEffect(() => {
    appDispatch({ type: APP_ACTION_TYPES.SET_BOTTOM_NAVIGATION, payload: false })
    setTimeout(() => {
      setTestCountdown(false)
    }, 300000000)
  }, [appDispatch])

  useIonViewDidLeave(() => {
    appDispatch({ type: APP_ACTION_TYPES.SET_BOTTOM_NAVIGATION, payload: true })
  })

  const confirmExitTest = () => {
    setBackAlert(true)
  }

  const [ questionNumber, setQuestionNumber ] = useState(0)
  const [ currentQuestion, setCurrentQuestion ] = useState(test[questionNumber])

  useEffect(() => {
    setCurrentQuestion(test[questionNumber])
  }, [questionNumber])

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
            <Timer timer={20} />
            <TestCountdown isOpen={testCountdown} setTestCountdown={setTestCountdown}/>
            <TestQuestion 
              question={currentQuestion.question}
              code={currentQuestion.code}
              language={currentQuestion.language}
              answers={currentQuestion.answers}
            />
          </QuestionContainer>
        </IonContent>
      </IonPage>
    </React.Fragment>
  )
}

export default Login;