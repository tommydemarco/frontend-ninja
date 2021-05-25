import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { arrowBack } from "ionicons/icons"

import AuthModule from "../components/AuthModule";
import ContentContainer from "../components/ContentContainer";

const Login: React.FC = () => {

  const onBackButtonClick = () => {
    console.log("Are you sure you want to go back")
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons>
            <IonIcon icon={arrowBack} onClick={onBackButtonClick}/>
          </IonButtons>
          <IonTitle>Title</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ContentContainer>
            <AuthModule />
        </ContentContainer>
      </IonContent>
    </IonPage>
  )
}

export default Login;