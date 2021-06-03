import { IonSlides, IonSlide, IonButton, IonIcon } from "@ionic/react";
import { logInOutline } from "ionicons/icons";
import React from "react";

import "./StartSlider.scss"

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const StartSlider = () => {
  return (
    <React.Fragment>
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
          <h1>Slide 1</h1>
        </IonSlide>
        <IonSlide>
          <h1>Slide 2</h1>
        </IonSlide>
        <IonSlide>
          <h1>Slide 3</h1>
        </IonSlide>
      </IonSlides>
      <IonButton routerLink="/login">
        <IonIcon icon={logInOutline} slot="start" />
        Login
      </IonButton>
    </React.Fragment>
  )
}

export default StartSlider;

