import { IonButton, IonIcon } from "@ionic/react"
import { logoGoogle } from "ionicons/icons"

const ProviderLogin = () => {
  return (
    <IonButton expand="block" color="primary">
      <IonIcon icon={logoGoogle} slot="start" />
      Sign in with Google
    </IonButton>
  )
}

export default ProviderLogin;