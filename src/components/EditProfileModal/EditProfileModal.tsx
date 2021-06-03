import { useState } from "react";
import { 
  IonButton, 
  IonButtons, 
  IonHeader, 
  IonIcon, 
  IonInput, 
  IonItem, 
  IonLabel, 
  IonModal, 
  IonTextarea, 
  IonTitle, 
  IonToolbar,
  IonSelect,
  IonRow,
  IonSelectOption, 
  IonToggle,
  IonItemDivider,
  IonCol} from "@ionic/react";
import { close } from "ionicons/icons";

import ContentContainer from "../ContentContainer";
import DoubleCTA from "../DoubleCTA";

import "./EditProfileModal.scss"

interface EditProfileModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, setIsOpen }) => {

  const [ selectedStack, setSelectedStack ] = useState<string[]>([]);
  const [ privateProfile, setPrivateProfile ] = useState(false);
  const [ difficulty, setDifficulty ] = useState("always ask");

  const saveChanges = () => {
    //add logic for save changes
  }

  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
           Profile Settings
          </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setIsOpen(false)}>
              <IonIcon icon={close} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <ContentContainer>
        <h3>Edit your Profile</h3>
        <IonItemDivider className="ion-padding-top">
          Profile information
        </IonItemDivider>
        <IonItem>
          <IonLabel>
            Username
          </IonLabel>
          <IonInput type="text" />
        </IonItem>
        <IonItem>
          <IonLabel>
            Profile info
          </IonLabel>
          <IonTextarea />
        </IonItem>
        <IonItem>
          <IonLabel>Your Stack</IonLabel>
          <IonSelect 
            value={selectedStack} 
            multiple={true} 
            okText="Select" 
            cancelText="Dismiss" 
            onIonChange={e => setSelectedStack(e.detail.value)}
          >
            <IonSelectOption value="brown">Brown</IonSelectOption>
            <IonSelectOption value="blonde">Blonde</IonSelectOption>
            <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItemDivider className="ion-padding-top">
          General settings
        </IonItemDivider>
        <IonItem>
          <IonLabel>
            Private Profile
          </IonLabel>
          <IonToggle 
            checked={privateProfile} 
            onIonChange={e => setPrivateProfile(e.detail.checked)}
          />
        </IonItem>
        <IonItem>
          <IonLabel>Difficulty</IonLabel>
          <IonSelect 
            value={difficulty} 
            okText="Select" 
            cancelText="Dismiss" 
            onIonChange={e => setDifficulty(e.detail.value)}
          >
            <IonSelectOption value="always ask">Always ask</IonSelectOption>
            <IonSelectOption value="blonde">Junior</IonSelectOption>
            <IonSelectOption value="black">Senior</IonSelectOption>
          </IonSelect>
        </IonItem>
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

export default EditProfileModal;