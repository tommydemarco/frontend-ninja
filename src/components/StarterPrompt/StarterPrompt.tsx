import { IonButton } from "@ionic/react"

import "./StarterPrompt.scss"

interface StarterPromptProps {
  active: boolean;
}

const StarterPrompt: React.FC<StarterPromptProps> = ({ active }) => {

  const classes = ["starter-prompt"]
  if (active) classes.push("starter-prompt")

  return (
    <div className={classes.join(" ")}>
      <h4>Select a difficulty</h4>
      <p>You can set a global difficulty in your profile settings.</p>
      <div className="starter-prompt__choice">
        <span className="starter-prompt__option">
          Junior
        </span>
        <input type="checkbox" className="starter-prompt__toggle" checked />
        <span className="starter-prompt__option">
          Senior
        </span>
      </div>
      <div className="starter-prompt__cta-wrapper">
        <IonButton className="ion-activatable ripple-parent" fill="outline">
          Go Back
        </IonButton>
        <IonButton className="ion-activatable ripple-parent">
          Start
        </IonButton>
      </div>
    </div>
  )
}

export default StarterPrompt;