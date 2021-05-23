import { IonButton, IonInput, IonItem, IonLabel, IonList, IonIcon } from "@ionic/react";
import { logoGoogle } from "ionicons/icons";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div className="login-form">
      <IonButton expand="block" color="primary">
        <IonIcon icon={logoGoogle} slot="start" />
        Login with Google
      </IonButton>
      <IonList>
        <IonItem>
          <IonLabel position="fixed">Email</IonLabel>
          <IonInput type="email" />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Password</IonLabel>
          <IonInput type="password" />
        </IonItem>
      </IonList>
    </div>
  )
}

export default LoginForm;