import { useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonBackButton } from '@ionic/react';

import ContentContainer from '../components/ContentContainer';
import OptionSelector from "../components/OptionSelector";
import TrophyCard from "../components/TrophyCard";

import { trophies } from "../data/trophies-data"

const sortingOptions = [
  { value: "rarity", label: "Rarity" },
  { value: "alphabetical", label: "Alphabetical" },
  { value: "owned-first", label: "Owned First" },
]

const Medals: React.FC = () => {

  const [ sortingValue, setSortingValue ] = useState("rarity")

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
          <OptionSelector 
            activeValue={sortingValue} 
            setterFunction={setSortingValue} 
            values={sortingOptions}
            label="Sort"
            multiple={false}
          />
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