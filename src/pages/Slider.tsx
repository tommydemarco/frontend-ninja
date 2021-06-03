import { IonContent, IonPage} from "@ionic/react";

import StartSlider from "../components/StartSlider";

const Slider: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <StartSlider />
      </IonContent>
    </IonPage>
  )
}

export default Slider;