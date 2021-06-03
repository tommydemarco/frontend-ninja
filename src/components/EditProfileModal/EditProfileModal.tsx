import { IonButton, IonButtons, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { close } from "ionicons/icons";

import ContentContainer from "../ContentContainer";

import "./EditProfileModal.scss"

interface EditProfileModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, setIsOpen }) => {

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
            Health Overview
          </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setIsOpen(false)}>
              <IonIcon icon={close} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <ContentContainer>
        <h3>Edit Profile</h3>
      </ContentContainer>
    </IonModal>
  )
}

export default EditProfileModal;