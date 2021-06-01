import "./AnswerPopup.scss";

interface AnswerPopupProps {
  className: "active" | "inactive";
  children: React.ReactNode;
}

const AnswerPopup: React.FC<AnswerPopupProps> = ({ className, children }) => {

  const classes = ["answer-popup"]
  classes.push(className)

  return (
    <div className={classes.join(" ")}>
      {children}
    </div>
  )
}

export default AnswerPopup