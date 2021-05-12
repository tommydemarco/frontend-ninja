import { useParams } from "react-router-dom"
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';

import ContentContainer from "../components/ContentContainer"

const Tab3: React.FC = (props) => {
  const { modeSlug } = useParams<{ modeSlug: string }>()
  
  const title = modeSlug.replace("-", " ")

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ContentContainer textCenter={true}>
          <h2>Select a category</h2>
        </ContentContainer>
      </IonContent>
    </IonPage>   
  );
};

export default Tab3;