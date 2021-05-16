import { useState, useEffect } from "react";

import { IonList, IonItem, IonIcon, IonLabel } from "@ionic/react";
import { school } from "ionicons/icons";

import "../Records";

interface RecordsProps {

}

const Records: React.FC<RecordsProps> = () => {

  const [ records, setRecords ] = useState([])
  const [ loading, isLoading ] = useState(true)
  const [ error, setError ] = useState(false)

  useEffect(() => {
    setRecords([

    ])
  }, [])

  return (
    <div className="records">
        <h4 className="records__title">Records</h4>
        <IonList>
          <IonItem>
            <IonIcon icon={school} slot="start" />
            <IonLabel>Quizzes</IonLabel>
            <IonLabel>1289</IonLabel>
          </IonItem>
        </IonList>
    </div>
  )
}

export default Records;