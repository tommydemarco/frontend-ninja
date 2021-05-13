import { useHistory } from "react-router-dom"
import RiplleOverlay from "../RippleClickOverlay"

import "./OptionCard.scss";

interface TeaserProps {
    title: string,
    subtitle?: string,
    children: React.ReactNode,
    path: string,
    vertical?: boolean,
}

const Teaser: React.FC<TeaserProps> = ({ title, subtitle, children, path, vertical }) => {
    const history = useHistory() 

    const goToPage = () => {
        history.push(path)
    }

    const classes = ["option-card"]
    if (vertical) classes.push("option-card--vertical")

    return (
        <div className={classes.join(" ")} onClick={goToPage}>
            <div className="option-card__icon-container">
                {children}
            </div>
            <RiplleOverlay>
                <div className="option-card__content">
                    <h4 className="option-card__title">{title}</h4>
                    <span className="option-card__subtitle">{subtitle}</span>
                </div>
            </RiplleOverlay>
        </div>
    )
}

export default Teaser
