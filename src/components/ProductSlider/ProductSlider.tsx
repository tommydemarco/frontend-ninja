import { useState, useEffect } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';

import ProductCard from "../ProductCard"

import 'swiper/swiper.scss';
import "./ProductSlider.scss"

import { ProductCardProps } from "../ProductCard/ProductCard"

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

  const loadingSkeleton = [
      { id: 0, ...loadingSkeletonData }, 
      { id: 1, ...loadingSkeletonData }, 
      { id: 2, ...loadingSkeletonData }
  ]

  useEffect(() => {
    if(swiper !== null) {
      swiper.slideTo(1)
      swiper.update()
    }
  }, [products, swiper, updateSignal])

  return (
    <div className="product-slider">
        <h3 className="product-slider__title">{title}</h3>
        <Swiper
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          
          onSwiper={(swiper) => setSwiper(swiper)}
        >
        {products ? renderProducts(products) : renderProducts(loadingSkeleton)}
      </Swiper>
    </div>
  )
}

const renderProducts = (products: any) => {
  return (
      products.map((product: ProductCardProps) => {
        return (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        )
      })
  )
}

export default ProductSlider