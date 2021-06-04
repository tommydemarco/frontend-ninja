import { useState } from "react";
import { 
  IonButton, 
  IonButtons, 
  IonHeader, 
  IonIcon, 
  IonModal, 
  IonRow,
  IonCol,
  IonTitle, 
  IonToolbar } from "@ionic/react";
import { close } from "ionicons/icons";

import ContentContainer from "../ContentContainer";
import DoubleCTA from "../ContentContainer";

import "./EditAvatartProfileModal.scss";

interface EditAvatarModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const EditAvatarModal: React.FC<EditAvatarModalProps> = ({ isOpen, setIsOpen }) => {

  const [ avatar, setAvatar ] = useState<string[]>([]);

  const saveChanges = () => {
    //add logic to save changes
  }

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
           Change avatar
          </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setIsOpen(false)}>
              <IonIcon icon={close} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <ContentContainer>
        <h3>Select your new avatar!</h3>
        <IonRow className="ion-padding-top ion-no-margin">
          <IonCol size="12">
            <DoubleCTA>
              <IonButton onClick={() => setIsOpen(false)} fill="outline">
                Go back
              </IonButton>
              <IonButton onClick={saveChanges}>
                Save changes
              </IonButton>
            </DoubleCTA>
          </IonCol>
        </IonRow> 
      </ContentContainer>
    </IonModal>
  )
}

export default EditAvatarModal;