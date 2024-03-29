import { useContext, useEffect } from "react"
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonAlert,
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { statsChartOutline, gridOutline, personOutline, diamondOutline } from 'ionicons/icons';

import { auth } from "./firebase";

// context
import { appContext, APP_ACTION_TYPES } from "./context/app";
// pages
import Home from './pages/Home';
import Charts from './pages/Charts';
import Profile from './pages/Profile';
import EditAvatar from './pages/EditAvatar';
import Mode from './pages/Mode';
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Legal from "./pages/Legal";
import Deals from "./pages/Deals";
import Trophies from "./pages/Trophies";
import Test from "./pages/Test";

// components
import SideMenu from "./components/SideMenu"

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

  const { appState, appDispatch } = useContext(appContext)!

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user === null) {
        appDispatch({ type: APP_ACTION_TYPES.SET_USER_ID, payload: null })
      } else {
        appDispatch({ type: APP_ACTION_TYPES.SET_USER_ID, payload: user.uid })
      }
    })
  }, [appDispatch])

  return (
    <IonApp>
        <IonReactRouter>
          <SideMenu />
          <IonTabs>
            <IonRouterOutlet id="main">
              <Route path="/legal/:page"><Legal /></Route>
              <Route path="/login"><Login /></Route>
              <Route path="/logout"><Logout /></Route>
              <Route path="/home"><Home /></Route>
              <Route path="/charts"><Charts /></Route>
              <Route path="/deals"><Deals /></Route>
              <Route path="/profile"><Profile /></Route>
              <Route path="/edit-avatar"><EditAvatar /></Route>
              <Route path="/trophies"><Trophies /></Route>
              <Route exact path="/mode/:modeSlug"><Mode /></Route>
              <Route path="/mode/:modeSlug/:categorySlug"><Test /></Route>
              <Route exact path="/"><Redirect to="/home" /></Route>
              <Route><Profile /></Route>
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
        <IonAlert 
          isOpen={appState.loadingAlertOpen}
          message="<h5>Loading your test...</h5>"
        />
        {appState.showTabNavigation === false && 
          (<style>
            {`ion-tab-bar { display: none }`}
          </style>)
        }
      </IonApp>
  )
}

export default App;
