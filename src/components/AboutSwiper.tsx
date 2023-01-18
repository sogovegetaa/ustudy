import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import tw from "twin.macro";
import { Pagination } from "swiper";
import Image from "next/image";

function AboutSwiper() {
  return (
    <div className="relative">
      <Image
        src="/images/swiper-circle.png"
        width={212}
        height={212}
        alt=""
        className="absolute right-[10%] bottom-0"
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        centeredSlides={true}
        modules={[Mousewheel, Navigation]}
        mousewheel={false}
        navigation={true}
        breakpoints={{
          350: {
            width: 350,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide className="flex flex-wrap">
          <SwiperLine>
            <Image
              src="/images/swiper-dot.png"
              width={40}
              height={40}
              alt=""
              className="absolute top-[-15px] left-[25px]"
            />
          </SwiperLine>
          <SwiperYear>2009</SwiperYear>{" "}
          <SwiperText>Создание Центра онлайн-тестирования UStudy</SwiperText>
        </SwiperSlide>
        <SwiperSlide className="flex flex-wrap">
          <SwiperLine>
            <Image
              src="/images/swiper-dot.png"
              width={40}
              height={40}
              alt=""
              className="absolute top-[-15px] left-[25px]"
            />
          </SwiperLine>
          <SwiperYear>2011</SwiperYear>{" "}
          <SwiperText>
            Создание IT-платформы и ее запуск для онлайн тестирования Ustudy.kz
          </SwiperText>
        </SwiperSlide>
        <SwiperSlide className="flex flex-wrap">
          <SwiperLine>
            <Image
              src="/images/swiper-dot.png"
              width={40}
              height={40}
              alt=""
              className="absolute top-[-15px] left-[25px]"
            />
          </SwiperLine>
          <SwiperYear>2013</SwiperYear>{" "}
          <SwiperText>Создание ТОО «U-FUTURE»</SwiperText>
        </SwiperSlide>
        <SwiperSlide className="flex flex-wrap">
          <SwiperLine>
            <Image
              src="/images/swiper-dot.png"
              width={40}
              height={40}
              alt=""
              className="absolute top-[-15px] left-[25px]"
            />
          </SwiperLine>
          <SwiperYear>2016</SwiperYear>{" "}
          <SwiperText>
            Открытие и запуск 21 РЦТ в городах республиканского значения и
            областных центрах РК
          </SwiperText>
        </SwiperSlide>
        <SwiperSlide className="flex flex-wrap">
          <SwiperLine>
            <Image
              src="/images/swiper-dot.png"
              width={40}
              height={40}
              alt=""
              className="absolute top-[-15px] left-[25px]"
            />
          </SwiperLine>
          <SwiperYear>2019</SwiperYear>{" "}
          <SwiperText>
            Подписание договора ГЧП с МОН РК. <br />
            Проведение первого НКТ (74 тыс. ч.)
          </SwiperText>
        </SwiperSlide>
        <SwiperSlide className="flex flex-wrap">
          <SwiperLine>
            <Image
              src="/images/swiper-dot.png"
              width={40}
              height={40}
              alt=""
              className="absolute top-[-15px] left-[25px]"
            />
          </SwiperLine>
          <SwiperYear>2020</SwiperYear>{" "}
          <SwiperText>
            Проведение первого КТ в магистратуру (30 тыс. ч.). Проведение первых
            тестов для МТСЗН РК (13 тыс. ч.)
          </SwiperText>
        </SwiperSlide>
        <SwiperSlide className="flex flex-wrap">
          <SwiperLine>
            <Image
              src="/images/swiper-dot.png"
              width={40}
              height={40}
              alt=""
              className="absolute top-[-15px] left-[25px]"
            />
          </SwiperLine>
          <SwiperYear>2021</SwiperYear>{" "}
          <SwiperText className="w-[100%!important]">
            Открытие и запуск 38 РЦТ в районных центрах, малых и моногородах и
            поселках. Проведение электронного ЕНТ (140 тыс. ч.) Проведение
            первого КТ в докторантуру (5 тыс. ч.). Проведение первых тестов
            РФМШ, НИШ, КТЛ (10 тыс. чел.)
          </SwiperText>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
const SwiperYear = tw.span`text-4xl font-bold`;
const SwiperText = tw.span`bg-white shadow-2xl py-[24px] pl-[24px] rounded-xl mt-[25px] xl:text-xl md:w-[90%] w-full`;
const SwiperLine = tw.div`bg-[#30AAE2] h-[5px] w-full mb-[30px] relative mt-[30px]`;

export default AboutSwiper;
