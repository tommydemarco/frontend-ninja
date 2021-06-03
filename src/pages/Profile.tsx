import React, { useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import { settings } from "ionicons/icons";

import Card from "../components/Card"
import ContentContainer from "../components/ContentContainer";
import DoubleCTA from "../components/DoubleCTA";
import EditProfileModal from "../components/EditProfileModal";
import ProfileInfo from "../components/ProfileInfo";
import Records from "../components/Records";
import TagContainer from "../components/TagContainer";

import { profileData } from "../data/profile-data";

const Tab3: React.FC = () => {

  const [ modalOpen, setModalOpen ] = useState(false);

  return (
    <React.Fragment>
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
            <Card 
              handlerFunction={() => setModalOpen(true)}
              buttonIcon={settings} 
              buttonText="profile settings"
            >
              <ProfileInfo {...profileData}>
                <TagContainer tags={profileData.stack} />
              </ProfileInfo>
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
      <EditProfileModal isOpen={modalOpen} setIsOpen={setModalOpen} />
    </React.Fragment>
  );
};

export default Tab3;
