import "./ContentContainer.scss"

interface Props {
    children: Element | React.ReactNode
}

const ContentContainer: React.FC<Props> = ({ children }) => {
    return (
        <div className="content-container">
            { children }
        </div>
    )
}

export default ContentContainer
