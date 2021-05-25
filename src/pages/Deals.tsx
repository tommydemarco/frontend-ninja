import { useState, useEffect } from "react"
import {
  IonPage,
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  useIonViewWillEnter,
} from '@ionic/react';

import ContentConteiner from "../components/ContentContainer"
import ProductSlider from "../components/ProductSlider"

import {productData} from "../data/product-data"

const Deals: React.FC = () => {
  const [ products, setProducts ] = useState<any>({})
  const [ updateSignal, setUpdateSignal ] = useState({})

  useEffect(() => {
    // const getProducts = async () => {
    //   const data = await fetch('https://fakestoreapi.com/products')
    //   const productData = await data.json()
    //   setProducts(productData)
    // }
    // getProducts()
    setTimeout(() => {
      setProducts(productData)
    },7)
  }, [])

  useIonViewWillEnter(() => {
    setUpdateSignal({})
  })

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
            <ProductSlider title="Developer Mugs" products={products.mugs} updateSignal={updateSignal} />
            <ProductSlider title="Developer Mugs" products={products.hoodies} updateSignal={updateSignal} />
            <ProductSlider title="Developer Mugs" products={products.mugs} updateSignal={updateSignal} />
        </ContentConteiner>
      </IonContent>
    </IonPage>
  );
};

export default Deals;
