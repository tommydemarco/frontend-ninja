import { useState } from "react"
import { IonButton, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";

import ProviderLogin from "../ProviderLogin";

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
      <ProviderLogin />
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
          Register
        </IonButton>
      </div>
    </div>
  )
}

export default RegisterForm;