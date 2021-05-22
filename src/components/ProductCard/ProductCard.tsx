import { IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom"

import DoubleCTA from "../DoubleCTA"

import "./ProductCard.scss";

export interface ProductCardProps {
  id: string;
  title: string;
  url: string;
  price: string;
  image: string;
  imgAlt: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, url, price, image, imgAlt = ""}) => {
  const history = useHistory()

  const goToProductPage = () => {
    history.push("products/" + url)
  }

  return (
    <article onClick={goToProductPage} className="product-card">
      <div className="prduct-card__img-container">
        <img src={image} alt={imgAlt} />
      </div>
      <div className="product-card__details">
        <h5>{title}</h5>
        <span className="product-card__price">{price}</span>
        <DoubleCTA>
          <IonButton>View Product</IonButton>
          <IonButton>Buy</IonButton>
        </DoubleCTA>
      </div>
    </article>
  )
}

export default ProductCard