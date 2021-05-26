import { IonIcon } from "@ionic/react";
import React from "react";
import "./MessageLabel.scss";

interface MessageLabelProps {
  color?: string;
  children: React.ReactNode;
  icon?: string;
}

const MessageLabel: React.FC<MessageLabelProps> = ({ children, color, icon }) => {

  const classes = ["message-label"]

  return (
    <div className={classes.join(" ")}>
      {icon && 
        (
          <div className="message-label__icon-container">
            <IonIcon icon={icon} color="light" />
          </div>
        )
      }
      {children}
    </div>
  )
}

export default MessageLabel;