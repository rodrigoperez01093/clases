"use client";

import Image from "next/image";
import { useState } from "react";

import ModalVideo from "react-modal-video";
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import videos from "./videos.json"

const Video = () => {
  
  const [isOpen, setOpen] = useState(false);
  const [video, setVideo] = useState('');

  SwiperCore.use([Autoplay])

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className='container w-full xs:pt-5 xs:h-[300px] md:h-[600px] 2xl:h-[700px] flex flex-row items-center justify-center bg-main-white'>
          <div className='w-full h-full'>
            <div className='q w-full h-full flex flex-row items-center justify-center'>
              
                <Swiper 
                  className='xs:w-[80%] xl:w-[800px] xs:h-[250px] md:h-[500px]'
                  modules={[Pagination]}
                  spaceBetween={40}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 2000 }}
                  loop
                >
                    {
                        videos.map((v, i) => (
                            <SwiperSlide
                                key={i}
                            >
                                
                                <div
                                className="mx-auto max-w-[770px] overflow-hidden rounded-md"
                                data-wow-delay=".15s"
                              >
                                <div className="relative aspect-[77/40] items-center justify-center">
                                  <Image src={v.image} alt="video image" fill />
                                  <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                                    <button
                                      aria-label="video play button"
                                      onClick={() => {setOpen(true); setVideo(v.id)}}
                                      className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                                    >
                                      <svg
                                        width="16"
                                        height="18"
                                        viewBox="0 0 16 18"
                                        className="fill-current"
                                      >
                                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
          </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId={video}
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;