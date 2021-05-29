import "./QuestionContainer.scss"

interface Props {
    children: Element | React.ReactNode;
}

const QuestionContainer: React.FC<Props> = ({ children }) => {

    const classes = ["question-container"]

    return (
        <div className={classes.join(" ")}>
            { children }
        </div>
    )
}

export default QuestionContainer
