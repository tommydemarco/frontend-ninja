import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { create } from "ionicons/icons";
import React from "react";
import "./ProfileInfo.scss"

interface ProfileInfoProps {
  imageSrc: string;
  imageAlt: string;
  username: string;
  description: string;
  children?: React.ReactNode;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ imageSrc, imageAlt, username, description, children }) => {
  return (
    <div className="profile-info">
      <IonGrid>
        <IonRow className="profile-info__initial-info">
          <IonCol size="6" className="profile-info__image-container">
            <img src={imageSrc} alt={imageAlt} className="profile-info__image" />
            <IonButton className="profile-info__edit-avatar">
              <IonIcon icon={create} slot="icon-only" />
            </IonButton>
          </IonCol>  
          <IonCol size="6" className="profile-info__data">
            <h3 className="profile-info__username">
              {username}
            </h3>
            {children}
          </IonCol>
        </IonRow>
        <IonRow>
          <span className="profile-info__description">
            {description}
          </span>
        </IonRow>
      </IonGrid>   
    </div>
  )
}

export default ProfileInfo;