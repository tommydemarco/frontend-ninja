import { useContext } from "react";
import { IonButton, IonButtons, IonIcon, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { close } from "ionicons/icons";

import { appContext, APP_ACTION_TYPES } from "../../context/app";
import "./HealthModal.scss";

const HealthModal = () => {
  
  const { appState, appDispatch } = useContext(appContext)!;

  return (
    <IonModal isOpen={appState.helathModalOpen}>
      <IonToolbar>
        <IonTitle>
          Health Overview
        </IonTitle>
        <IonButtons>
          <IonButton 
            onClick={() => appDispatch({ type: APP_ACTION_TYPES.SET_HEALTH_MODAL, payload: false })}
          >
            <IonIcon icon={close} slot="icon-only" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonModal>
  )
}

export default HealthModal;