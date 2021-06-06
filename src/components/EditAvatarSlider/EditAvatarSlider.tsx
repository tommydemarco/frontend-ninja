import { useState } from "react";
import { 
  IonButton, 
  IonRow,
  IonCol } from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import DoubleCTA from "../DoubleCTA";

import "./EditAvatarSlider.scss";

interface EditAvatarSliderProps {
  goBack: () => void;
}

const avatarArray = [...new Array(40)].map((_, index)=> index + 1);

const EditAvatarSlider: React.FC<EditAvatarSliderProps> = ({ goBack }) => {

  const [ avatar, setAvatar ] = useState<string[]>([]);

  const saveChanges = () => {
    //add logic to save changes
  }

  return (
      <div className="edit-avatar-slider">
        <h3>Select your new avatar!</h3>
        <Swiper 
          className="edit-avatar-slider__slider" 
          spaceBetween={20} 
          slidesPerView={2}
          slidesPerColumnFill={"row"} 
          slidesPerColumn={window.innerHeight > 680 ? 3 : 2} 
        >
          {avatarArray.map(avatarNumber => {
            return (
              <SwiperSlide key={avatarNumber} className="edit-avatar-slider__slide">
                <img 
                  src={"/assets/avatars/" + avatarNumber + ".png"} 
                  alt={"Avatar number" + avatarNumber}
                  className="edit-avatar-slider__image"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <IonRow className="ion-padding-top ion-no-margin">
          <IonCol size="12">
            <DoubleCTA>
              <IonButton onClick={goBack} fill="outline">
                Go back
              </IonButton>
              <IonButton onClick={saveChanges}>
                Save changes
              </IonButton>
            </DoubleCTA>
          </IonCol>
        </IonRow> 
    </div>
  )
}

export default EditAvatarSlider;