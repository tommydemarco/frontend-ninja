import { useContext } from "react"
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { statsChartOutline, gridOutline, personOutline, diamondOutline, logOutOutline } from 'ionicons/icons';
// context
import { appContext } from "./context/app";
// pages
import Home from './pages/Home';
import Charts from './pages/Charts';
import Profile from './pages/Profile';
import Mode from './pages/Mode';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* customizes iconic standard styles */
import './theme/ionic-components-styles.scss';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  //const state = useContext(appContext)

  return (
    <IonApp>
        <IonReactRouter>
          <IonMenu contentId="main">
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
            <IonContent>
              <IonList>
                <IonMenuToggle>
                  <IonItem button routerLink="/logout">
                    <IonIcon slot="start" icon={logOutOutline} />
                    <IonLabel>Logout</IonLabel>
                  </IonItem>
                </IonMenuToggle> 
              </IonList>
            </IonContent>
          </IonMenu>
          <IonTabs>
            <IonRouterOutlet id="main">
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/charts">
                <Charts />
              </Route>
              <Route path="/deals">
                <Profile />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/mode/:modeSlug">
                <Mode />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom" color="primary">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={gridOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="charts" href="/charts">
                <IonIcon icon={statsChartOutline} />
                <IonLabel>Charts</IonLabel>
              </IonTabButton>
              <IonTabButton tab="deals" href="/deals">
                <IonIcon icon={diamondOutline} />
                <IonLabel>Deals</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={personOutline} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar> 
          </IonTabs>
        </IonReactRouter>
      </IonApp>
  )
}

export default App;
