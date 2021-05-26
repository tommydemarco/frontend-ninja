import { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { logOut, cog, documentText, lockClosed, barChart, codeSlash, megaphone, heartCircle, logIn } from "ionicons/icons";
import { auth } from "../../firebase";

import { appContext } from "../../context/app";

import ContentContainer from "../ContentContainer";

import "./SideMenu.scss";

const SideMenu = () => {

  const { appState } = useContext(appContext)!

  const history = useHistory();

  const logUserOut = async () => {
    try {
      await auth.signOut()
    } catch(e) {
      console.log(e)
    }
    history.push("/logout")
  }

  return (
    <IonMenu contentId="main" className="side-menu">
      <IonToolbar color="primary">
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
      <IonContent fullscreen>
        <ContentContainer className="side-menu__content">
          <IonList>
          {appState.userId ? 
            <IonMenuToggle>
              <IonItem onClick={logUserOut} >
                <IonIcon slot="start" icon={logOut} color="primary" />
                <IonLabel>Logout</IonLabel>
              </IonItem>
            </IonMenuToggle> : 
            <IonMenuToggle>
              <IonItem button routerLink="/login">
                <IonIcon slot="start" icon={logIn} color="primary" />
                <IonLabel>Login</IonLabel>
              </IonItem>
            </IonMenuToggle>
          }
          {appState.userId &&
            <IonMenuToggle>
              <IonItem button routerLink="/settings">
                <IonIcon slot="start" icon={cog} color="primary" />
                <IonLabel>Settings</IonLabel>
              </IonItem>
            </IonMenuToggle>
          }
            <IonMenuToggle>
              <IonItem button routerLink="/logout">
                <IonIcon slot="start" icon={barChart} color="primary" />
                <IonLabel>Your Progress</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button routerLink="/logout">
                <IonIcon slot="start" icon={heartCircle} color="primary" />
                <IonLabel>Leave feedback</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button routerLink="/logout">
                <IonIcon slot="start" icon={megaphone} color="primary" />
                <IonLabel>Ask for feature</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button>
                <IonIcon slot="start" icon={codeSlash} color="primary" />
                <IonLabel>Frontend News</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
          <div className="side-menu__legal-container">
            <IonList>
              <IonMenuToggle>
                <IonItem button routerLink="/legal/privacy">
                  <IonIcon slot="start" icon={lockClosed} color="primary" />
                  <IonLabel>Privacy Policy</IonLabel>
                </IonItem>
              </IonMenuToggle> 
              <IonMenuToggle>
                <IonItem button routerLink="/legal/terms-of-use">
                  <IonIcon slot="start" icon={documentText} color="primary" />
                  <IonLabel>Terms of Use</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </div>
        </ContentContainer>
      </IonContent>
    </IonMenu>
  )
}

export default SideMenu;