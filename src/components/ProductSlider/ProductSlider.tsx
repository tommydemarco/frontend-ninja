import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductCard from "../ProductCard"

import 'swiper/swiper.scss';
import "./ProductSlider.scss";

import { ProductCardProps } from "../ProductCard/ProductCard";

interface ProductSliderProps {
  title: string;
  products: ProductCardProps[];
  updateSignal: {};
}

const loadingSkeletonData = {
  title: "",
  image: "",
  imageAlt: "",
  price: "",
  url: ""
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products, updateSignal }) => {

  const [ swiper, setSwiper ] = useState<any>(null)

  useEffect(() => {
    if (swiper !== null) swiper.update() 
  }, [updateSignal, swiper])

  const loadingSkeleton = [
      { id: "0", ...loadingSkeletonData }, 
      { id: "1", ...loadingSkeletonData }, 
      { id: "2", ...loadingSkeletonData }
  ]

  return (
    <div className="product-slider">
      <h3 className="product-slider__title">{title}</h3>
      <Swiper spaceBetween={20} slidesPerView={1} onSwiper={(swiper => setSwiper(swiper))}>
        <SwiperSlide>
          <ProductCard 
            id={products ? products[0].id : loadingSkeleton[0].id } 
            title={products ? products[0].title : loadingSkeleton[0].title }
            url={products ? products[0].url : loadingSkeleton[0].url }
            price={products ? products[0].price : loadingSkeleton[0].price }
            image={products ? products[0].image : loadingSkeleton[0].image }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard 
            id={products ? products[1].id : loadingSkeleton[1].id } 
            title={products ? products[1].title : loadingSkeleton[1].title }
            url={products ? products[1].url : loadingSkeleton[1].url }
            price={products ? products[1].price : loadingSkeleton[1].price }
            image={products ? products[1].image : loadingSkeleton[1].image }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard 
            id={products ? products[2].id : loadingSkeleton[2].id } 
            title={products ? products[2].title : loadingSkeleton[2].title }
            url={products ? products[2].url : loadingSkeleton[2].url }
            price={products ? products[2].price : loadingSkeleton[2].price }
            image={products ? products[2].image : loadingSkeleton[2].image }
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard 
            id={products ? products[0].id : loadingSkeleton[0].id } 
            title={products ? products[0].title : loadingSkeleton[0].title }
            url={products ? products[0].url : loadingSkeleton[0].url }
            price={products ? products[0].price : loadingSkeleton[0].price }
            image={products ? products[0].image : loadingSkeleton[0].image }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductSlider