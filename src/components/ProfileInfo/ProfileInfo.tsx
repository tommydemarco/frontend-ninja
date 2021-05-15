import "./ProfileInfo.scss"

interface ProfileInfoProps {
  imageSrc: string;
  imageAlt: string;
  username: string;
  description: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ imageSrc, imageAlt, username, description }) => {
  return (
    <div className="profile-info">
      <div className="profile-info__img-container">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <div className="profile-info__content">
        <h3 className="profile-info__username">
          {username}
        </h3>
        <span className="profile-info__description">
          {description}
        </span>
      </div>
    </div>
  )
}

export default ProfileInfo;