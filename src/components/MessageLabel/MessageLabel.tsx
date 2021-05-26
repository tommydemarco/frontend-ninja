import { IonIcon } from "@ionic/react";
import React from "react";
import "./MessageLabel.scss";

interface MessageLabelProps {
  color: "success" | "warning" | "error";
  children: React.ReactNode;
  icon?: string;
}

const MessageLabel: React.FC<MessageLabelProps> = ({ children, color, icon }) => {

  const classes = ["message-label"]
  classes.push("message-label--" + color)

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