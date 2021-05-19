import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton } from '@ionic/react';

import Card from "../components/Card"
import ContentContainer from "../components/ContentContainer";
import DoubleCTA from "../components/DoubleCTA"
import ProfileInfo from "../components/ProfileInfo";
import Records from "../components/Records";

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
          <Card>
            <ProfileInfo {...profileData} />
          </Card>
          <Card>
            <Records quizzesRecord={1879} sniperRecord={1879} timeRecord={1879} bugfixRecord={1879} />
          </Card>
          <DoubleCTA>
            <IonButton color="danger">
              Delete profile
            </IonButton>
            <IonButton routerLink="/logout">
              Logout
            </IonButton>
          </DoubleCTA>
        </ContentContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
