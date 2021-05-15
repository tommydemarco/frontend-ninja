import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';

import ContentContainer from "../components/ContentContainer";
import ProfileInfo from "../components/ProfileInfo";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Profile</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ContentContainer>
          <ProfileInfo imageSrc="" imageAlt="" username="" description="" />
        </ContentContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
