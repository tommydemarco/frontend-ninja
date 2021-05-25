import React, { useState } from "react";
import { IonButton } from "@ionic/react";

import DoubleCTA from "../DoubleCTA"

import "./StarterPrompt.scss"

interface StarterPromptProps {
  active: boolean;
  setPrompt: React.Dispatch<React.SetStateAction<boolean>>;
  actionCall: () => void
}

const StarterPrompt: React.FC<StarterPromptProps> = ({ active, setPrompt, actionCall }) => {

  const [seniorDifficulty, setSeniorDifficulty] = useState(false)

  const classes = ["starter-prompt"]
  if (active) classes.push("starter-prompt--active")

  const overlayClasses = ["starter-prompt__overlay"]
  if (active) overlayClasses.push("starter-prompt__overlay--active")

  return (
    <React.Fragment>
      <div className={overlayClasses.join(" ")} onClick={() => setPrompt(false)}></div>
      <div className={classes.join(" ")}>
        <h4 className="starter-prompt__title">Select a difficulty</h4>
        <p className="starter-prompt__subtitle">You can set a global difficulty in your profile settings.</p>
        <div className="starter-prompt__choice">
          <span className="starter-prompt__option" onClick={() => setSeniorDifficulty(false)}>
            Junior
          </span>
          <input type="checkbox" className="starter-prompt__toggle" onChange={() => setSeniorDifficulty(!seniorDifficulty)} checked={seniorDifficulty} />
          <span className="starter-prompt__option" onClick={() => setSeniorDifficulty(true)}>
            Senior
          </span>
        </div>
        <DoubleCTA>
          <IonButton onClick={() => setPrompt(false)} className="ion-activatable ripple-parent" fill="outline" expand="block">
            Go Back
          </IonButton>
          <IonButton className="ion-activatable ripple-parent" expand="block" onClick={actionCall}>
            Start
          </IonButton>
        </DoubleCTA>
      </div>
    </React.Fragment>
  )
}

export default StarterPrompt;