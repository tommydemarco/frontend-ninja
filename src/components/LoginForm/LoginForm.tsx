import { useState } from "react"
import { IonButton, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";

import GoogleLogin from "../GoogleLogin"

import "./LoginForm.scss";

interface LoginFormProps {
  performLoginWithEmailAndPassword: (email: string, password: string ) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ performLoginWithEmailAndPassword }) => {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const onLogin = () => {
    if (email === "" || password === "") return
    performLoginWithEmailAndPassword(email, password)
  }

  return (
    <div className="login-form">
      <GoogleLogin />
      <div className="login-form__form">
        <IonList>
          <IonItem>
            <IonLabel position="fixed">Email</IonLabel>
            <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">Password</IonLabel>
            <IonInput type="password" 
                      value={password} 
                      onIonChange={e => setPassword(e.detail.value!)} 
            />
          </IonItem>
        </IonList>
        <IonButton onClick={onLogin}>
          Login
        </IonButton>
      </div>
    </div>
  )
}

export default LoginForm;