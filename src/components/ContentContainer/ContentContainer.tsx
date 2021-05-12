import "./ContentContainer.scss"

interface Props {
    children: Element | React.ReactNode;
    textCenter?: boolean
}

const ContentContainer: React.FC<Props> = ({ children, textCenter }) => {

    const classes = ["content-container"]
    if (textCenter) classes.push("content-container--text-center")

    return (
        <div className={classes.join(" ")}>
            { children }
        </div>
    )
}

export default ContentContainer
