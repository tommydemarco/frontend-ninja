import "./BlurredLayer.scss"

interface BlurredLayerProps {
  active: boolean;
}

const BlurredLayer: React.FC<BlurredLayerProps> = ({ active }) => {

  const classes = ["blurred-layer"]
  if (active) classes.push("blurred-layer--active")

  return (
    <div className={classes.join(" ")}>
    </div>
  )
}

export default BlurredLayer