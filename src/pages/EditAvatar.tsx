import { useHistory } from "react-router-dom"
import { IonButtons, IonHeader, IonButton, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { close } from "ionicons/icons";

import ContentContainer from "../components/ContentContainer";
import EditAvatarSlider from "../components/EditAvatarSlider";

const EditAvatar = () => {

  const history = useHistory()

  const goBack = () => history.goBack();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
           Change avatar
          </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={goBack}>
              <IonIcon icon={close} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <ContentContainer>
        <EditAvatarSlider goBack={goBack} />
      </ContentContainer>
    </IonPage>
  )
}

export default EditAvatar;