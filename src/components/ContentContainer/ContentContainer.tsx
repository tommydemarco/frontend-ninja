import "./ContentContainer.scss"

interface Props {
    children: Element | React.ReactNode;
    textCenter?: boolean;
    className?: string;
}

const ContentContainer: React.FC<Props> = ({ children, textCenter, className }) => {

    const classes = ["content-container"]
    if (textCenter) classes.push("content-container--text-center")
    if (typeof className === "string" && className.length) classes.push(className)

    return (
        <div className={classes.join(" ")}>
            { children }
        </div>
    )
}

export default ContentContainer
