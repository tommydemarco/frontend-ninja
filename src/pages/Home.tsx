import { IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { schoolOutline, locateOutline, hourglassOutline, bugOutline, medalOutline } from 'ionicons/icons';
// components
import ContentContainer from '../components/ContentContainer';
import OptionCard from "../components/OptionCard"

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ContentContainer>
          <OptionCard path="/mode/quizzes" title="Quizzes" subtitle="Test your knowledge and have fun with the quizzes">
            <IonIcon icon={schoolOutline} />
          </OptionCard>
          <OptionCard path="/mode/sniper" title="Sniper Mode" subtitle="Show the world who the real Frontend Monster is!">
            <IonIcon icon={locateOutline} />
          </OptionCard>
          <OptionCard path="/mode/time-challenge" title="Time Challenge" subtitle="Beat the clock and rise in the global charts">
            <IonIcon icon={hourglassOutline} />
          </OptionCard>
          <OptionCard path="/mode/bugfix" title="Bugfix Mode" subtitle="Test your bug-fixing skills and fix the mistakes">
            <IonIcon icon={bugOutline} />
          </OptionCard>
          <OptionCard path="/medals" title="Your Medals" subtitle="Lorem ipsum dolor sit amet consectetur adipiscing">
            <IonIcon icon={medalOutline} />
          </OptionCard>
        </ContentContainer>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
