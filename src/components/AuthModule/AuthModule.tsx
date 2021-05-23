import { IonSegment, IonSegmentButton, IonLabel, IonIcon } from "@ionic/react"
import { balloon } from "ionicons/icons"
import { useState } from "react"

import LoginForm from "../LoginForm";
import InfoContent from "../InfoContent";
import RegisterForm from "../RegisterForm"

import "./AuthModule.scss"

const AuthModule = () => {
  const [ mode, setMode ] = useState("login")

  return (
    <div className="auth-module">
      <div className="auth-module__intro">
        <InfoContent 
          title="Greetings!"
          subtitle="Log in or register to use all the functionaloties of the app"
        >
          <IonIcon icon={balloon} color="primary" />
        </InfoContent>
      </div>
      <IonSegment onIonChange={e => setMode(e.detail.value!)} value={mode}>
        <IonSegmentButton value="login">
          <IonLabel>Login</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="register">
          <IonLabel>Register</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <div className="auth-module__content">
        {mode === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
      {mode === "login" && (
        <div className="auth-module__notice">
          <span>Don't have an ccount?</span>{" "}
          <span className="auth-module__notice-link" onClick={() => setMode("register")}>Register</span>
        </div>
      )}
    </div>
  )
}

export default AuthModule