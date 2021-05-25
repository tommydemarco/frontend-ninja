import { IonBackButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

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
          <IonButtons slot="start" onClick={onBackButtonClick}>
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
            <AuthModule />
        </ContentContainer>
      </IonContent>
    </IonPage>
  )
}

export default Login;