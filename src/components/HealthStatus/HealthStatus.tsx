import { useContext } from "react"
import { IonButton, IonIcon } from "@ionic/react"

import { appContext } from "../../context/app";
import { heart } from "ionicons/icons"

import "./HealthStatus.scss"

const HealthStatus = () => {

  const { appState } = useContext(appContext)!

  return (
    <IonButton>
        {appState.health}
        <IonIcon icon={heart} color="danger" />
    </IonButton>
  )
}

export default HealthStatus;