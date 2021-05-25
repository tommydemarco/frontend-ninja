import "./BlurredLayer.scss"

interface BlurredLayerProps {
  active: boolean;
}

const BlurredLayer: React.FC<BlurredLayerProps> = ({ active }) => {

  const classes = ["blurred-layer"]

  return (
    <div className={classes.join(" ")}>
    </div>
  )
}

export default BlurredLayer