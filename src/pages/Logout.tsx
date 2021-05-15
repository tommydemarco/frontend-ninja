import React from "react";

import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { logOut } from "ionicons/icons"

import ContentContainer from "../components/ContentContainer";
import InfoContent from "../components/InfoContent";

const Logout: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar color="primary">
          <IonTitle>Logout</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ContentContainer>
          <InfoContent 
              title="You have logged out"
              subtitle="Log back in to access features"
              buttonText="Log in"
              buttonLink="/login"
          >
            <IonIcon icon={logOut} color="primary" />
          </InfoContent>  
        </ContentContainer>
      </IonContent>
    </IonPage>
  )
}

export default Logout;