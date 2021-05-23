import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react"
import { useState } from "react"

import LoginForm from "../LoginForm";

import "./AuthModule.scss"

const AuthModule = () => {
  const [ mode, setMode ] = useState("login")

  return (
    <div className="auth-module">
      <IonSegment onIonChange={e => setMode(e.detail.value!)} value={mode}>
        <IonSegmentButton value="login">
          <IonLabel>Login</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="register">
          <IonLabel>Register</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <div className="auth-module__content">
        {mode === "login" ? <LoginForm /> : <LoginForm />}
      </div>
    </div>
  )
}

export default AuthModule