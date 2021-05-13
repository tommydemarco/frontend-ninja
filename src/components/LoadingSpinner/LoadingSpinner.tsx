import { IonSpinner } from "@ionic/react"

import "./LoadingSpinner.scss"

interface LoadingSpinnerProps {
  color: string;
  inline: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ color, inline }) => {

  const classes = ["loading-spinner"]
  if (inline) classes.push("loading-spinner--inline")
  
  return (
    <div className={classes.join(" ")}>
      <IonSpinner color={color} />
    </div>
  )
}