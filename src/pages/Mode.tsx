import { useState, useContext } from "react"
import { useParams, useHistory } from "react-router-dom"
import { IonContent, IonHeader, IonPage, IonIcon, IonTitle, IonMenuButton, IonToolbar, IonButtons, IonBackButton, useIonViewWillLeave } from '@ionic/react';

import { appContext, APP_ACTION_TYPES } from "../context/app";

import ContentContainer from "../components/ContentContainer"
import FlexContainer from "../components/FlexContainer";
import CategoryCard from "../components/CategoryCard";
import StarterPrompt from "../components/StarterPrompt";

import { modesCategory, ModeCategories } from "../data/modes-categories"
import { app } from "../firebase";

const Tab3: React.FC = (props) => {

  const { appDispatch } = useContext(appContext)!
  const { modeSlug } = useParams<{ modeSlug: string }>()
  const history = useHistory()
  
  const title = modeSlug.replace("-", " ")

  const [ promptActive, setPromptActive ] = useState(false)
  const [ categoryPath, setCategoryPath ] = useState<string | null>(null)

  const goToTest = () => {
    appDispatch({ type: APP_ACTION_TYPES.SET_LOADING_ALERT, payload: true })
    setTimeout(() => {
      history.push("/mode/" + modeSlug + "/" + categoryPath)
    }, 600)
  }

  useIonViewWillLeave(() => {
    setPromptActive(false)
  })

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