import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IonBackButton, IonContent, IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

import ContentContainer from "../components/ContentContainer"

import { legalContent } from "../data/legal-content"

const Legal = () => {

  const { page } = useParams<{ page: "termsOfUse" | "privacy" }>();
  const title = page.replace("-", " ").toUpperCase();

  const [ content, setContent ] = useState<string[]>()

  useEffect(() => {
    setContent(legalContent[page])
  }, [page])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>
            {title.toUpperCase()}
          </IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ContentContainer>
          <h2>{title}</h2>
          {content?.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>
          })}
        </ContentContainer>
      </IonContent>
    </IonPage>
  )
}

export default Legal;