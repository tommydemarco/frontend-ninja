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

import { logOut, documentText, lockClosed, barChart, codeSlash, megaphone, heartCircle } from "ionicons/icons"

import ContentContainer from "../ContentContainer";

import "./SideMenu.scss"

const SideMenu = () => {
  return (
    <IonMenu contentId="main" className="side-menu">
      <IonToolbar color="primary">
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
      <IonContent fullscreen>
        <ContentContainer className="side-menu__content">
          <IonList>
            <IonMenuToggle>
              <IonItem button routerLink="/logout">
                <IonIcon slot="start" icon={logOut} color="primary" />
                <IonLabel>Logout</IonLabel>
              </IonItem>
            </IonMenuToggle> 
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