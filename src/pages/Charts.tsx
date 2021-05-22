import { useState } from "react"
import {
  IonPage,
  IonHeader,
  IonContent,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';

import ContentConteiner from "../components/ContentContainer"
import Chart from "../components/Chart"

const Charts: React.FC = () => {

  const [ activeChart, setActiveChart ] = useState<string>("sniper-mode")

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Charts</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>   
        <IonSegment scrollable={true} onIonChange={e => setActiveChart(e.detail.value!)} value={activeChart}>
          <IonSegmentButton value="sniper-mode">
            <IonLabel>Sniper mode</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="time-challenge">
            <IonLabel>Time Challenge</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="bugfix-mode">
            <IonLabel>Bugfix mode</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <ContentConteiner>  
          <Chart mode={activeChart} />
        </ContentConteiner>
      </IonContent>
    </IonPage>
  );
};

export default Charts;
