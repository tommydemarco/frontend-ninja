import { IonButton } from "@ionic/react";
import "./InfoContent.scss";

interface InfoContentProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

const InfoContent: React.FC<InfoContentProps> = ({ children, title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="info-content">
      <div className="info-content__icon-container">
        {children}
      </div>
      <div className="info-content__content">
        <h2 className="info-content__title">
          {title}
        </h2>
        <span className="info-content__subtitle">
          {subtitle}
        </span>  
        {buttonText && buttonLink && (
          <div className="info-content__cta-container">
            <IonButton routerLink={buttonLink}>
              {buttonText}
            </IonButton>
          </div>
        )}
      </div>
    </div>
  )
}

export default InfoContent;