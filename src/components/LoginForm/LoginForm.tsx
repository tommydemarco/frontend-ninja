import { IonIcon } from "@ionic/react"
import { balloon } from "ionicons/icons"

import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div className="login-form">
        <IonIcon icon={balloon} />
        <h3>Greetings!</h3>
        <span>Log in to use all the functionaloties of the app</span>
    </div>
  )
}

export default LoginForm;