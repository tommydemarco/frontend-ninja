import { IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom"

import DoubleCTA from "../DoubleCTA"

import "./ProductCard.scss";

interface ProductProps {
  title: string;
  url: string;
  price: string;
  imgUrl: string;
  imgAlt: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, url, price, imgUrl, imgAlt = ""}) => {
  const history = useHistory()

  const goToProductPage = () => {
    history.push("products/" + url)
  }

  return (
    <article onClick={goToProductPage} className="product-card">
      <div className="prduct-card__img-container">
        <img src={imgUrl} alt={imgAlt} />
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