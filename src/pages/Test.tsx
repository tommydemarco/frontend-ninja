import { useState, useEffect } from "react"
import { 
  IonBackButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  useIonViewWillLeave } from "@ionic/react";

import ContentContainer from "../components/ContentContainer";
import TestCountdown from "../components/TestCountdown";

const Login: React.FC = () => {

  const [ testCountdown, setTestCountdown ] = useState(true)
  
  useEffect(() => {
    // setTimeout(() => {
    //   setTestCountdown(false)
    // }, 3000)
  }, [])

  useIonViewWillLeave(() => {
    
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