import { IonButton, IonIcon } from "@ionic/react"
import "./Card.scss"

interface CardProps {
  children: React.ReactNode;
  handlerFunction?: () => void;
  buttonText?: string;
  buttonIcon?: string;
}

const Card: React.FC<CardProps> = ({ children, handlerFunction, buttonText, buttonIcon }) => {

  return (
    <div className="card">
      <div className="card__content">
        {children}
      </div>
      {buttonText && 
        (<div className="card__footer">
          <IonButton onClick={handlerFunction} color="light">
            {buttonIcon && <IonIcon icon={buttonIcon} slot="start" color="primary" />}
            {buttonText}
          </IonButton>
        </div>
      )}
    </div>
  )
}

export default Card