import { IonCol, IonGrid, IonRow, IonButton } from "@ionic/react";
import "./ProfileInfo.scss"

interface ProfileInfoProps {
  imageSrc: string;
  imageAlt: string;
  username: string;
  description: string;
  email: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ imageSrc, imageAlt, username, description, email }) => {
  return (
    <div className="profile-info">
      <IonGrid>
        <IonRow>
          <IonCol>
            <img src={imageSrc} alt={imageAlt} className="profile-info__image" />
          </IonCol>  
          <IonCol>
            <h3 className="profile-info__username">
              {username}
            </h3>
            <span className="profile-info__email">
              {email}
            </span>
            <IonButton className="profile-info__edit">
              Edit profile
            </IonButton>
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