import { IonSpinner } from "@ionic/react"

import "./LoadingSpinner.scss"

interface LoadingSpinnerProps {
  color?: string;
  centered?: boolean; 
  small?: boolean;
  slot?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color, centered, small, slot }) => {

  const classes = ["loading-spinner"]
  if (centered) classes.push("loading-spinner--centered")
  if (small) classes.push("loading-spinner--small")
  
  return (
    <div className={classes.join(" ")}>
      <IonSpinner slot={slot ? slot : "start"} color={color || "primary"} />
    </div>
  )
}

export default LoadingSpinner;