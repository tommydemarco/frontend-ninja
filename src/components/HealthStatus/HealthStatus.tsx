import { useContext } from "react"
import { IonButton, IonIcon } from "@ionic/react"

import { appContext, APP_ACTION_TYPES } from "../../context/app";
import { heart } from "ionicons/icons"

import "./HealthStatus.scss"

const HealthStatus = () => {

  const { appState, appDispatch } = useContext(appContext)!

  const openHealthModal = () => {
    appDispatch({ type: APP_ACTION_TYPES.SET_HEALTH_MODAL, payload: true })
  }

  return (
    <IonButton 
      className="health-status" 
      onClick={openHealthModal}
    >
        {appState.health}
        <IonIcon icon={heart} color="danger" size="medium" />
    </IonButton>
  )
}

export default HealthStatus;