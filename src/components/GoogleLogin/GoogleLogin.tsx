import { IonButton, IonIcon } from "@ionic/react"
import { logoGoogle } from "ionicons/icons"

const GoogleLogin = () => {
  return (
    <IonButton expand="block" color="primary">
      <IonIcon icon={logoGoogle} slot="start" />
      Login with Google
    </IonButton>
  )
}

export default GoogleLogin;