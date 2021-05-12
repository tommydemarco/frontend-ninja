import "./FlexContainer.scss"

interface FlexContainerProps {
  children: React.ReactChildren
}

const FlexContainer: React.FC<FlexContainerProps> = ({ children }) => {
  return (
    <div className="flex-container">
      {children}
    </div>
  )
}