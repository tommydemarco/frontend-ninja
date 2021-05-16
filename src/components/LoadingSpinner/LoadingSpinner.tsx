import { IonSpinner } from "@ionic/react"

import "./LoadingSpinner.scss"

interface LoadingSpinnerProps {
  color?: string;
  centered?: boolean; 
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color, centered }) => {

  const classes = ["loading-spinner"]
  if (centered) classes.push("loading-spinner--centered")
  
  return (
    <div className={classes.join(" ")}>
      <IonSpinner color={color || "primary"} />
    </div>
  )
}

export default LoadingSpinner;