import { useState } from "react";
import { useHistory } from "react-router-dom";
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonIcon, IonLoading, useIonViewWillLeave } from "@ionic/react";
import { logIn, medkit } from "ionicons/icons";

import { auth } from "../../firebase"

import MessageLabel from "../MessageLabel";

import "./LoginForm.scss";

interface LoginFormProps {
  performLoginWithEmailAndPassword?: (email: string, password: string ) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ performLoginWithEmailAndPassword }) => {

  const history = useHistory()

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState(false)
  const [ loading, setLoading ] = useState(false)

  const onLogin = async () => {
    if (email === "" || password === "") return
    try {
      setError(false);
      setLoading(true)
      await auth.signInWithEmailAndPassword(email, password)
      setLoading(false)
      history.replace("/home")
    } catch(e) {
      setLoading(false);
      setError(true)
    }
  }

  return (
    <div className="login-form">
      <IonLoading isOpen={loading} message="Logging you in..." />
      <div className="login-form__form">
        {error && (
          <MessageLabel color="warning" icon={medkit}>
            We got some trouble logging you in, please try again later
          </MessageLabel>
        )}
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
          <IonIcon icon={logIn} slot="start" />
          Login
        </IonButton>
      </div>
    </div>
  )
}

export default LoginForm;