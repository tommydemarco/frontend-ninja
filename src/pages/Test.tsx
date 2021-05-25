import { useState, useEffect } from "react"
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
  useIonViewDidLeave } from "@ionic/react";

import ContentContainer from "../components/ContentContainer";
import TestCountdown from "../components/TestCountdown";

const Login: React.FC = () => {

  const history = useHistory()

  const [ testCountdown, setTestCountdown ] = useState(true)
  
  useEffect(() => {
    // setTimeout(() => {
    //   setTestCountdown(false)
    // }, 3000)
  }, [])

  useIonViewDidLeave(() => {
    //history.replace(history.location)
  })

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
          <TestCountdown isOpen={testCountdown} setTestCountdown={setTestCountdown}/>
        </ContentContainer>
      </IonContent>
    </IonPage>
  )
}

export default Login;