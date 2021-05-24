import "./FlexContainer.scss"

interface FlexContainerProps {
  children: React.ReactNode
}

const FlexContainer: React.FC<FlexContainerProps> = ({ children }) => {
  return (
    <div className="flex-container">
      {children}
    </div>
  )
}

export default FlexContainer;