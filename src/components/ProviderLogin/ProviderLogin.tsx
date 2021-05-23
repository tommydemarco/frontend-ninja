import { IonButton, IonIcon } from "@ionic/react"
import { logoGoogle } from "ionicons/icons"

const ProviderLogin = () => {
  return (
    <IonButton expand="block" color="primary">
      <IonIcon icon={logoGoogle} slot="start" />
      Login with Google
    </IonButton>
  )
}

export default ProviderLogin;