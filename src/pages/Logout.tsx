import React from "react";

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import ContentContainer from "../components/ContentContainer";
import InfoContent from "../components/InfoContent";

interface LogoutProps {
  children: React.ReactNode;
}

const Logout: React.FC<LogoutProps> = ({ children }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonButtons slot="end">
          <IonMenuButton />
        </IonButtons>
        <IonToolbar>
          <IonTitle>Logout</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ContentContainer>
          <InfoContent title="You have successfully logged out" subtitle="Log back in to access features">

          </InfoContent>  
        </ContentContainer>
      </IonContent>
    </IonPage>
  )
}

export default Logout;