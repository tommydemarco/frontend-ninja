import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonBackButton } from '@ionic/react';

import ContentContainer from '../components/ContentContainer';
import TrophyCard from "../components/TrophyCard";

import { trophies } from "../data/trophies-data"

const Medals: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Trophies</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ContentContainer>
          {trophies.map((trophy) => {
            return (
              <TrophyCard {...trophy} key={trophy.title} />
            )
          })}
        </ContentContainer>
      </IonContent>
    </IonPage>
  );
};

export default Medals;