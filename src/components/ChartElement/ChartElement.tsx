import "./ChartElement.scss"

interface ChartElementProps {
  children: React.ReactNode;
  username: string;
  points: string | number;
}

const ChartElement: React.FC<ChartElementProps> = ({ children, username, points }) => {
  return (
    <div className="chart-element">
        <div className="chart-element__icon-container">
            {children}
        </div>
        <div className="chart-element__content">
            <span className="chart-element__username">
              {username}
            </span>
            <span className="chart-element__points">
              {points}
            </span>
        </div>
    </div>
  )
}

export default ChartElement;