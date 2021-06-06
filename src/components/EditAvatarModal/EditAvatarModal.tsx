import { useState, useEffect, useRef } from "react";
import { 
  IonButton, 
  IonButtons, 
  IonHeader, 
  IonIcon, 
  IonModal, 
  IonRow,
  IonCol,
  IonTitle, 
  IonToolbar, } from "@ionic/react";
import { close } from "ionicons/icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import ContentContainer from "../ContentContainer";
import DoubleCTA from "../DoubleCTA";

import "./EditAvatarModal.scss";

interface EditAvatarModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  pageWidth: number;
}

const avatarArray = [...new Array(40)].map((_, index)=> index + 1);

const EditAvatarModal: React.FC<EditAvatarModalProps> = ({ isOpen, setIsOpen, pageWidth }) => {

  const modalRef = useRef<HTMLIonModalElement | null>(null)

  const [ avatar, setAvatar ] = useState<string[]>([]);
  const [ swiper, setSwiper ] = useState<any>(null);
  const [ sliderPresent, setSliderPresent ] = useState(false);

  const addSlider = () => {
    setTimeout(() => setSliderPresent(true), 20)
  }

  useEffect(() => {
    window.addEventListener("ionModalWillPresent", addSlider)
    return () => {
      window.removeEventListener("ionModalWillPresent", addSlider)
    }
  })

  const saveChanges = () => {
    //add logic to save changes
  }

  return (
    <IonModal isOpen={isOpen} ref={modalRef} cssClass="edit-avatar-modal">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>
           Change avatar
          </IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setIsOpen(false)}>
              <IonIcon icon={close} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <ContentContainer>
        <h3>Select your new avatar!</h3>
        {sliderPresent && (<Swiper 
          className="edit-avatar-modal__slider" 
          spaceBetween={20} 
          slidesPerView={2}
          slidesPerColumnFill={"row"} 
          slidesPerColumn={window.innerHeight > 680 ? 3 : 2} 
          onSwiper={(swiper => setSwiper(swiper))}
        >
          {avatarArray.map(avatarNumber => {
            return (
              <SwiperSlide key={avatarNumber} className="edit-avatar-modal__slide">
                <img 
                  src={"/assets/avatars/" + avatarNumber + ".png"} 
                  alt={"Avatar number" + avatarNumber}
                  className="edit-avatar-modal__image"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>)}
        <IonRow className="ion-padding-top ion-no-margin">
          <IonCol size="12">
            <DoubleCTA>
              <IonButton onClick={() => setIsOpen(false)} fill="outline">
                Go back
              </IonButton>
              <IonButton onClick={saveChanges}>
                Save changes
              </IonButton>
            </DoubleCTA>
          </IonCol>
        </IonRow> 
      </ContentContainer>
    </IonModal>
  )
}

export default EditAvatarModal;