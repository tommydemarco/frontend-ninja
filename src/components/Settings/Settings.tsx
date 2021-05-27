import { IonList, IonItem, IonLabel, IonIcon } from "@ionic/react";
import { timer } from "ionicons/icons";

import "./Settings.scss";

const Settings = () => {
  return (
    <div className="settings">
      <h3 className="settings__title">Settings</h3>
      <IonList>
        <IonItem>
          <IonIcon icon={timer} color="primary" slot="start" />
          <IonLabel>Timer</IonLabel>
          <IonLabel  slot="end" className="settings__switch">
            Switch
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon icon={timer} color="primary" slot="start" />
          <IonLabel>Anonymus</IonLabel>
          <IonLabel slot="end" className="settings__switch">
            Switch
          </IonLabel>
        </IonItem>
      </IonList>
    </div>
    
  )
}

export default Settings;