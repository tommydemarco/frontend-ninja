import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';

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
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
