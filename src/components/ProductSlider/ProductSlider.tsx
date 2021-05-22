import "./ProductSlider.scss"

interface ProductSliderProps {
  title: string;
  products: Products[]
}

interface Products {
  title: string;

}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products }) => {
  return (
    <div>
        <h3>{title}</h3>
        
    </div>
  )
}

export default ProductSlider