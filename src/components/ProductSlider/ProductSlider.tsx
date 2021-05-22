import { useState, useEffect } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';

import ProductCard from "../ProductCard"

import 'swiper/swiper.scss';
import "./ProductSlider.scss"

import { ProductCardProps } from "../ProductCard/ProductCard"

interface ProductSliderProps {
  title: string;
  products: ProductCardProps[];
  loading: boolean;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products, loading }) => {

  const [ swiper, setSwiper ] = useState<any>(null)

  useEffect(() => {
    if(swiper !== null) {
      swiper.update();
    }
  }, [products, swiper])

  return (
    <div className="product-slider">
        <h3>{title}</h3>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
        {products.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <ProductCard {...product} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default ProductSlider