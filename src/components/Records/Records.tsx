import { IonList, IonItem, IonIcon, IonLabel } from "@ionic/react";
import { school, bug, locate, hourglass } from "ionicons/icons";

import LoadingSpinner from "../LoadingSpinner"

import "../Records";

interface RecordsProps {
  quizzesRecord: number | null | false;
  sniperRecord: number | null | false;
  timeRecord: number | null | false;
  bugfixRecord: number | null | false;
}

const Records: React.FC<RecordsProps> = ({ quizzesRecord, sniperRecord, timeRecord, bugfixRecord }) => {
  return (
    <div className="records">
        <h4 className="records__title">Records</h4>
        <IonList>
          <IonItem>
            <IonIcon icon={school} slot="start" color="primary" />
            <IonLabel>Quizzes</IonLabel>
            <IonLabel slot="end">
              {quizzesRecord === null ? <LoadingSpinner/> 
              : quizzesRecord === false ? 
              <span className="error-message">no data</span>
              : quizzesRecord}
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={locate} slot="start" color="primary" />
            <IonLabel>Sniper Mode</IonLabel>
            <IonLabel slot="end">
              {sniperRecord === null ? <LoadingSpinner/> 
              : sniperRecord === false ? 
              <span className="error-message">no data</span>
              : sniperRecord}
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={hourglass} slot="start" color="primary" />
            <IonLabel>Time Challenge</IonLabel>
            <IonLabel slot="end">
              {timeRecord === null ? <LoadingSpinner/> 
              : timeRecord === false ? 
              <span className="error-message">no data</span>
              : timeRecord}
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={bug} slot="start" color="primary" />
            <IonLabel>Bugfix Mode</IonLabel>
            <IonLabel slot="end">
              {bugfixRecord === null ? <LoadingSpinner/> 
              : bugfixRecord === false ? 
              <span className="error-message">no data</span>
              : bugfixRecord}
            </IonLabel>
          </IonItem>
        </IonList>
    </div>
  )
}

export default Records;