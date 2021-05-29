import { IonButton, IonIcon } from "@ionic/react";
import { cart, open } from "ionicons/icons";

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
  
  // const goToProductPage = () => {
  //   history.push("products/" + url)
  // }

  return (
    <article className="product-card">
      <div className="product-card__img-container">
        <img src={image} alt={imgAlt} />
      </div>
      <div className="product-card__top-decoration"></div>
      <div className="product-card__details">
        <div className="product-card__bottom-decoration"></div>
        <h5>{title}</h5>
        <span className="product-card__price">{price}</span>
        <DoubleCTA>
          <IonButton color="light"><IonIcon slot="start" color="primary" icon={open} />View</IonButton>
          <IonButton color="light"><IonIcon slot="start" color="primary" icon={cart} />Buy</IonButton>
        </DoubleCTA>
      </div>
    </article>
  )
}

export default ProductCard