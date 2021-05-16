import "./DoubleCTA.scss";

interface DoubleCTAProps {
  children: React.ReactNode
}

const DoubleCTA: React.FC<DoubleCTAProps> = ({ children }) => {
  return (
    <div className="double-cta">
      {children}
    </div>
  )
}

export default DoubleCTA;