'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  { id: 1, name: 'Banner 1', href: 'https://betaki.bet.br/games/', imageUrl: '/banners/banner-1.webp', active: true, },
  { id: 2, name: 'Banner 2', href: 'https://betaki.bet.br/games-live/', imageUrl: '/banners/banner-2.webp', active: true, },
  { id: 3, name: 'Banner 3', href: 'https://betaki.bet.br/games-live/', imageUrl: '/banners/banner-3.webp', active: true, },
  { id: 4, name: 'Banner 4', href: 'https://betaki.bet.br/games/', imageUrl: '/banners/banner-4.webp', active: true, },
]

export default function BannerTop() {
  return (
    <div className="flex mb-0 md:mb-10 justify-center items-center">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination]}
        className="banners-swiper"
      >
        {data.map((item) => item.active ? (
          <SwiperSlide key={item.id}>
            <a
              href={item.href}
              target="_blank"
              className="block w-full h-full"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={1110}
                height={300}
                priority
                className="w-full h-full object-cover hover:opacity-70"
              />
            </a>
          </SwiperSlide>
        ) : null)}
      </Swiper>
    </div >
  );
}
