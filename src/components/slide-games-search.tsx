'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  { id: 1, name: 'Crash Games 1', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
  { id: 2, name: 'Crash Games 2', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
  { id: 3, name: 'Crash Games 3', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
  { id: 4, name: 'Crash Games 4', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
  { id: 5, name: 'Crash Games 5', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
  { id: 6, name: 'Crash Games 6', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
  { id: 7, name: 'Crash Games 7', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
  { id: 8, name: 'Crash Games 8', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
  { id: 9, name: 'Crash Games 9', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
  { id: 10, name: 'Crash Games 10', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
  { id: 11, name: 'Crash Games 11', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
  { id: 12, name: 'Crash Games 12', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
  { id: 13, name: 'Crash Games 13', href: 'https://betaki.bet.br/games/', imageUrl: '/images/search-jogos-icon.png', active: true, },
]

export default function SlideGamesSearch() {
  return (
    <div className="flex gap-3 md:gap-5 overflow-x-auto scroll-smooth select-none no-overflow">
      <div className="pl-px shrink-0 overflow-padding"></div>
      <Swiper slidesPerView={8} spaceBetween={10} modules={[Pagination]} className="slide-games-swiper">
        {data.map((item) => item.active ? (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center gap-3 mb-0 md:mb-4 shrink-0">
              <a
                href={item.href}
                target="_blank"
                className="items-center justify-center"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={109}
                  height={109}
                  loading="lazy"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                <p className="mt-2 text-xs leading-normal text-shark-900 dark:text-white font-medium text-center">
                  Crash Games
                </p>
              </a>
            </div>
          </SwiperSlide>
        ) : null)}
      </Swiper>
      <div className="pr-px shrink-0 overflow-padding"></div>
    </div >
  );
}
