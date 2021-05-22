import { useState, useEffect } from "react"
import {
  IonPage,
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';

import ContentConteiner from "../components/ContentContainer"
import ProductSlider from "../components/ProductSlider"

import { ProductCardProps } from "../components/ProductCard/ProductCard"

import {productData} from "../data/product-data"

const Deals: React.FC = () => {

  const [ loading, setLoading ] = useState(false)

  const [ products, setProducts ] = useState<ProductCardProps[]>([])

  useEffect(() => {
    // const getProducts = async () => {
    //   const data = await fetch('https://fakestoreapi.com/products')
    //   const productData = await data.json()
    //   setProducts(productData)
    // }
    // getProducts()
    setTimeout(() => {
      setProducts(productData)
    })
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Charts</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>   
        <ContentConteiner> 
            <ProductSlider loading={loading} title="Developer Mugs" products={products} />
        </ContentConteiner>
      </IonContent>
    </IonPage>
  );
};

export default Deals;
