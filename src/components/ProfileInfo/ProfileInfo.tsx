import { IonGrid, IonRow } from "@ionic/react";
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
          <div className="profile-info__img-container">
            <img src={imageSrc} alt={imageAlt} />
          </div>
          <div className="profile-info__content">
            <h3 className="profile-info__username">
              {username}
            </h3>
            <span className="profile-info__email">
              {email}
            </span>
          </div>
        </IonRow>
        <IonRow>
          <span className="profile-info__descritpion">
            {description}
          </span>
        </IonRow>
      </IonGrid>   
    </div>
  )
}

export default ProfileInfo;