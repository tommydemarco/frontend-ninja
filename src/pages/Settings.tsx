import { IonContent, IonHeader, IonPage, IonIcon, IonTitle, IonMenuButton, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel } from '@ionic/react';
import { timer } from "ionicons/icons"

import ContentContainer from "../components/ContentContainer";

const Settings: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonButtons slot="end">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ContentContainer textCenter={true}>
          <h2>Fine tune your experience</h2>
          <IonList>
            <IonItem>
              <IonIcon icon={timer} color="primary" />
              <IonLabel>Timer</IonLabel>
            </IonItem>
          </IonList>
        </ContentContainer>
      </IonContent>
    </IonPage>   
  );
};

export default Settings;