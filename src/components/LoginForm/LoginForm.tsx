import { useState } from "react"
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonSpinner, IonIcon } from "@ionic/react";
import { logIn } from "ionicons/icons"

import { auth } from "../../firebase"

import LoadingSpinner from "../LoadingSpinner"
import ProviderLogin from "../ProviderLogin";

import "./LoginForm.scss";

interface LoginFormProps {
  performLoginWithEmailAndPassword?: (email: string, password: string ) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ performLoginWithEmailAndPassword }) => {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState(true)
  const [ loading, setLoading ] = useState(true)

  const onLogin = async () => {
    if (email === "" || password === "") return
    try {
      setError(false);
      setLoading(true)
      const credentials = await auth.signInWithEmailAndPassword(email, password)
    } catch(e) {
      setLoading(true)
      setError(true)
    }
  }

  return (
    <div className="login-form">
      <ProviderLogin />
      <div className="login-form__form">
        {error && <IonLabel className="ion-padding" color="warning">
          We got some trouble logging you in, please try again later
        </IonLabel>}
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
          {loading ? 
            <LoadingSpinner color="light" slot="end" small={true} /> 
            : <IonIcon icon={logIn} slot="end" />}
        </IonButton>
      </div>
    </div>
  )
}

export default LoginForm;