import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';

import ContentContainer from "../components/ContentContainer";
import ProfileInfo from "../components/ProfileInfo";


import { profileData } from "../data/profile-data"

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
          <ProfileInfo {...profileData} />
        </ContentContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
