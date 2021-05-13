import { useParams } from "react-router-dom"
import { IonContent, IonHeader, IonPage, IonIcon, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';

import ContentContainer from "../components/ContentContainer"
import FlexContainer from "../components/FlexContainer";
import OptionCard from "../components/OptionCard"

import { modesCategory, ModeCategories } from "../data/modes-categories"

const Tab3: React.FC = (props) => {
  const { modeSlug } = useParams<{ modeSlug: string }>()
  
  const title = modeSlug.replace("-", " ")

  //@ts-ignore
  const categories = modesCategory[modeSlug]

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
          <FlexContainer>
            {categories?.map((item: ModeCategories) => {
              return (
                <OptionCard path={"modes"} key={item.path} 
                            vertical={true} title={item.category}
                >
                    <IonIcon icon={item.icon} />
                </OptionCard>
              )
            })}
          </FlexContainer>
        </ContentContainer>
      </IonContent>
    </IonPage>   
  );
};

export default Tab3;