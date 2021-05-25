import { useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { IonContent, IonHeader, IonPage, IonIcon, IonTitle, IonMenuButton, IonToolbar, IonButtons, IonBackButton } from '@ionic/react';

import ContentContainer from "../components/ContentContainer"
import FlexContainer from "../components/FlexContainer";
import CategoryCard from "../components/CategoryCard";
import StarterPrompt from "../components/StarterPrompt";

import { modesCategory, ModeCategories } from "../data/modes-categories"

const Tab3: React.FC = (props) => {
  const { modeSlug } = useParams<{ modeSlug: string }>()
  const history = useHistory()
  
  const title = modeSlug.replace("-", " ")

  const [ promptActive, setPromptActive ] = useState(false)
  const [ categoryPath, setCategoryPath ] = useState<string | null>(null)

  const goToTest = () => {
    history.push(modeSlug + "/" + categoryPath)
  }

  //@ts-ignore
  const categories = modesCategory[modeSlug]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonButtons slot="end">
            <IonMenuButton/>
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
                <CategoryCard 
                  setPrompt={setPromptActive} 
                  path={item.path} 
                  key={item.path} 
                  label={item.category}
                  setCategoryPath={setCategoryPath}
                >
                    <IonIcon icon={item.icon} />
                </CategoryCard>
              )
            })}
          </FlexContainer>
          <StarterPrompt active={promptActive} setPrompt={setPromptActive} actionCall={goToTest} />
        </ContentContainer>
      </IonContent>
    </IonPage>   
  );
};

export default Tab3;