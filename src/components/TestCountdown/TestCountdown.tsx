import { useHistory } from "react-router-dom";
import { IonAlert } from "@ionic/react";

import "./TestCountdown.scss";

interface TestCountdownProps {
  isOpen: boolean;
  setTestCountdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const TestCountdown: React.FC<TestCountdownProps> = ({ isOpen, setTestCountdown }) => {

  const history = useHistory()

  return (
    <IonAlert
          isOpen={isOpen}
          onDidDismiss={() => setTestCountdown(false)}
          cssClass='test-countdown'
          header={"Get ready, ninja!"}
          buttons={[
            {
              text: 'Go back',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                history.goBack()
              }
            },
            {
              text: 'Start now!',
              handler: () => {
                setTestCountdown(false)
              }
            }
          ]}
        />
  )
}

export default TestCountdown;