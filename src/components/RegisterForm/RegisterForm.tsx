import { useState } from "react"
import { IonButton, IonIcon, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import { personAdd } from "ionicons/icons"

import "./RegisterForm.scss";

interface RegisterFormProps {
  performRegisterWithEmailAndPassword?: (email: string, password: string, username: string) => void
}

const RegisterForm: React.FC<RegisterFormProps> = ({ performRegisterWithEmailAndPassword }) => {

  const [ email, setEmail ] = useState("")
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")

  const onRegister = () => {
    if (email === "" || password === "") return
    //performLoginWithEmailAndPassword(email, password, username)
  }

  return (
    <div className="register-form">
      <div className="register-form__form">
        <IonList>
          <IonItem>
            <IonLabel position="fixed">Email</IonLabel>
            <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Username</IonLabel>
            <IonInput type="text" value={username} onIonChange={e => setUsername(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Password</IonLabel>
            <IonInput type="password" 
                      value={password} 
                      onIonChange={e => setPassword(e.detail.value!)} 
            />
          </IonItem>
        </IonList>
        <IonButton onClick={onRegister}>
          <IonIcon icon={personAdd} slot="start" />
          Register
        </IonButton>
      </div>
    </div>
  )
}

export default RegisterForm;