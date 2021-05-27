import { useContext } from "react";
import { IonButton, IonButtons, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { close } from "ionicons/icons";

import { appContext, APP_ACTION_TYPES } from "../../context/app";
import "./HealthModal.scss";
import ContentContainer from "../ContentContainer";

const HealthModal = () => {
  
  const { appState, appDispatch } = useContext(appContext)!;

  const closeHealthModal = () => {
    appDispatch({ type: APP_ACTION_TYPES.SET_HEALTH_MODAL, payload: false })
  }

  return (
    <IonModal isOpen={appState.helathModalOpen}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
            Health Overview
          </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={closeHealthModal}>
              <IonIcon icon={close} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <ContentContainer>
      </ContentContainer>
    </IonModal>
  )
}

export default HealthModal;