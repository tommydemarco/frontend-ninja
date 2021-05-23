import { IonButton, IonIcon } from "@ionic/react";
import { cart, open } from "ionicons/icons";

import { useHistory } from "react-router-dom"

import DoubleCTA from "../DoubleCTA"

import "./ProductCard.scss";

export interface ProductCardProps {
  id: string;
  title: string;
  url: string;
  price: string;
  image: string;
  imgAlt?: string;
  loading?: boolean;
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
          <IonButton><IonIcon slot="start" icon={open} />View</IonButton>
          <IonButton><IonIcon slot="start" icon={cart} />Buy</IonButton>
        </DoubleCTA>
      </div>
    </article>
  )
}

export default ProductCard