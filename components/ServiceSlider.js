import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'
import Service1Icon from '../public/img/services/service-icon1.svg'
import Service2Icon from '../public/img/services/service-icon2.svg'
import Service3Icon from '../public/img/services/service-icon3.svg'

const services = [
  {
    image: Service1Icon,
    name: 'Pharmacy',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, veritatis. Consequatur tempora beatae aspernatur, repellat asperiores eius a aliquid ab.',
  },
  {
    image: Service2Icon,
    name: 'Breed-specific Haircuts',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, veritatis. Consequatur tempora ab.',
  },
  {
    image: Service3Icon,
    name: 'Clothes',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, veritatis. Consequatur tempora beatae aspernatur, repellat asperiores eius a aliquid ab.',
  },
]

const ServiceSlider = () => {
  return (
    <Swiper>
      {
        services.map((service, i)=> {
          return (
            <SwiperSlide key={i}>
              <Image src={service.image} alt="" />
              <div>{service.name}</div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default ServiceSlider;
