import { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"
import { 
  IonBackButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  useIonViewDidLeave, 
  useIonViewWillLeave} from "@ionic/react";

import { appContext, APP_ACTION_TYPES } from "../context/app"

import BlurredLayer from "../components/BlurredLayer";
import ContentContainer from "../components/ContentContainer";
import TestCountdown from "../components/TestCountdown";
import TestQuestion from "../components/TestQuestion";
import Timer from "../components/Timer";

import { test } from "../data/test-data"

const Login: React.FC = () => {

  const { appDispatch } = useContext(appContext)!

  const history = useHistory()

  const [ testCountdown, setTestCountdown ] = useState(true)
  
  useEffect(() => {
    appDispatch({ type: APP_ACTION_TYPES.SET_BOTTOM_NAVIGATION, payload: false })
    setTimeout(() => {
      setTestCountdown(false)
    }, 300000000)
  }, [appDispatch])

  useIonViewWillLeave(() => {
    appDispatch({ type: APP_ACTION_TYPES.SET_BOTTOM_NAVIGATION, payload: true })
  })

  useIonViewDidLeave(() => {
    history.replace(history.location)
  })

  //const mixedTestQuestions = 

  const [ questionNumber, setQuestionNumber ] = useState(0)
  const [ currentQuestion, setCurrentQuestion ] = useState(test[questionNumber])

  useEffect(() => {
    setCurrentQuestion(test[questionNumber])
  }, [questionNumber])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <div onClick={() => console.log("helooo")}>
              <IonBackButton />
            </div>
          </IonButtons>
          <IonTitle>Title</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ContentContainer>
          <BlurredLayer active={testCountdown} />
          <Timer timer={20} />
          <TestCountdown isOpen={testCountdown} setTestCountdown={setTestCountdown}/>
          <TestQuestion {...currentQuestion} />
        </ContentContainer>
      </IonContent>
    </IonPage>
  )
}

export default Login;