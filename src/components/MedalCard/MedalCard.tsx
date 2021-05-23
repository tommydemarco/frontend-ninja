import { IonIcon } from "@ionic/react";
import { checkmarkCircle, closeCircle } from "ionicons/icons";

import "./MedalCard";

interface MedalCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  rarity: string;
  owned: boolean;
}

const MedalCard: React.FC<MedalCardProps> = (props) => {
  const { children, title, description, rarity, owned} = props
  return (
    <article className="medal-card">
      <header className="medal-card__header">
        <div className="medal-card__icon-container">
          {children}
        </div>
        <h5>{title}</h5>
      </header>
      <p className="medal-card__descroption">{description}</p>
      <footer className="medal-card__footer">
        <span className="medal-card__rarity">{rarity}</span>
        <span className="medal-card__owned">
          {owned ? (
            <div className="medal-card__owned-label">
              You own this medal <IonIcon icon={checkmarkCircle} color="primary" />
            </div>
          ) : (
            <div className="medal-card__owned-label">
              You don't own this medal <IonIcon icon={closeCircle} color="primary" />
            </div>
          )}
        </span>
      </footer>
    </article>
  )
}

export default MedalCard;