import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton } from '@ionic/react';

const Tab3: React.FC = (props) => {
  console.log(props)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons>
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Mode</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;