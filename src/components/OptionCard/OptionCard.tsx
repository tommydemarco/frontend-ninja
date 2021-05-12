import { Link } from "react-router-dom"
import RiplleOverlay from "../RippleClickOverlay"

import "./OptionCard.scss";

interface TeaserProps {
    title: string,
    subtitle: string,
    children: React.ReactNode,
    path: string
}

const Teaser: React.FC<TeaserProps> = ({ title, subtitle, children, path }) => {
    return (
        <Link to={path} className="option-card">
            <div className="option-card__icon-container">
                {children}
            </div>
            <RiplleOverlay>
                <div className="option-card__content">
                    <h4 className="option-card__title">{title}</h4>
                    <span className="option-card__subtitle">{subtitle}</span>
                </div>
            </RiplleOverlay>
        </Link>
    )
}

export default Teaser
