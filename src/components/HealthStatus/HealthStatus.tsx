import { useContext } from "react"
import { IonButton, IonIcon } from "@ionic/react"

import { appContext } from "../../context/app";
import { heart } from "ionicons/icons"

import "./HealthStatus.scss"

const HealthStatus = () => {

  const { appState } = useContext(appContext)!

  return (
    <IonButton className="health-status">
        {appState.health}
        <IonIcon icon={heart} color="danger" size="medium" />
    </IonButton>
  )
}

export default HealthStatus;