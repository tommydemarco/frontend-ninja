import { IonIcon } from "@ionic/react";
import { checkmarkCircle, trophy } from "ionicons/icons";

import "./TrophyCard.scss";

interface TrophyCardProps {
  title: string;
  description: string;
  rarity: string;
  owned: boolean;
}

const TrophyCard: React.FC<TrophyCardProps> = (props) => {
  const { title, description, rarity, owned} = props

  const getTrophyColor = (): string => {
    if (rarity === "rare") return "grey"
    else return "grey"
  }

  return (
    <article className="trophy-card">
      <header className="trophy-card__header">
        <div className="trophy-card__icon-container">
          <IonIcon icon={trophy} style={{ color: getTrophyColor() }} />
        </div>
        <div className="trophy-card__info">
          <h5>{title}</h5>
          <p className="trophy-card__description">{description}</p>
        </div>
      </header>
      <footer className="trophy-card__footer">
        <span className="trophy-card__rarity">{rarity}</span>
        {owned ? (
          <div className="trophy-card__progress">
            <span>Trophy owned&nbsp;</span><IonIcon icon={checkmarkCircle} color="success" />
          </div>
          
        ) : (
          <div className="trophy-card__progress">
            Progress: 0 / 3
          </div>
        )}
      </footer>
    </article>
  )
}

export default TrophyCard;