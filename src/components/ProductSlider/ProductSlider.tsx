import { Swiper, SwiperSlide } from 'swiper/react';

import ProductCard from "../ProductCard"

import 'swiper/swiper.scss';
import "./ProductSlider.scss"

import { ProductCardProps } from "../ProductCard/ProductCard"

interface ProductSliderProps {
  title: string;
  products: ProductCardProps[]
}

const ProductSlider: React.FC<ProductSliderProps> = ({ title, products }) => {
  return (
    <div className="product-slider">
        <h3>{title}</h3>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
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