/* eslint-disable unused-imports/no-unused-vars */
import { NextPage } from 'next'

import { Meta } from '@/Layouts/Meta'
import { Main } from '@/components/Templates/Main'
import { AppConfig } from '@/Utils/AppConfig'

import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Mousewheel, Pagination } from 'swiper'

const Index = () => {
  const linkImage =
    'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?cs=srgb&dl=pexels-fauxels-3184416.jpg&fm=jpg'

  return (
    <Main>
      <Meta
        title={`${AppConfig.title} | Beranda`}
        description={AppConfig.description}
      />
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${linkImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className="h-full flex flex-col justify-center items-center bg-[#53bfee] border-2 border-white">
            <h1
              style={{ textShadow: '2px 2px 4px #000000' }}
              className="text-white text-3xl font-bold mb-1">
              Selamat datang di PT LOREM IPSUM
            </h1>
            <p
              style={{ textShadow: '2px 2px 4px #000000' }}
              className="text-white text-sm font-bold border-y-2 py-2">
              Kami hadir untuk memberikan solusi terbaik bagi Anda.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center items-center bg-[#53bfee] border-2 border-white">
            <h1 className="text-white text-3xl font-bold mb-1">
              Selamat datang di PT LOREM IPSUM
            </h1>
            <p className="text-white text-sm font-bold border-y-2 py-2">
              Kami hadir untuk memberikan solusi terbaik bagi Anda.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </Main>
  )
}

export default Index
