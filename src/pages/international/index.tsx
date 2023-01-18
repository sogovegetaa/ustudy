import React from "react";
import Header from "../../components/Header";
import tw from "twin.macro";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Head from "next/head";
const int = '/international'
let arr = [
  {
    id: 1,
    title: "CEPT",
    body: "Тест на знание английского языка Cambridge English Placement Test (CEPT)",
    link: `${int}/cert`,
  },
  {
    id: 2,
    title: "Toefl ITP",
    body: "Регистрация на международные тесты Toelf ITP",
    link: `${int}/toeflitp`,
  },
  {
    id: 3,
    title: "Toefl/ Обучающий материал ",
    body: "Регистрация на международные тесты Toelf ",
    link: `${int}/toefl`,
  },
  {
    id: 4,
    title: "IELTS",
    body: "Регистрация на международные тесты IELTS",
    link: `${int}/ielts`,
  },
  {
    id: 5,
    title: "TOEIC/ TFI",
    body: "Тест на знание французского языка TFI, TOEIC",
    link: `${int}/toeictfi`,
  },
  {
    id: 6,
    title: "TDS/Linguaskill",
    body: "Регистрация на международные тесты TSD, Linguaskill",
    link: `${int}/tds`,
  },
];
function international() {
  return (
    <div>
      <Head>
        <title>Международные тесты</title>
      </Head>
      <Header />
      <Container>
        <div className="relative">
          <Image
            src="/images/swiper-circle.png"
            width={212}
            height={212}
            alt=""
            className="absolute top-0 right-0 z-20 hidden md:block"
          />
          <div className="md:text-[48px] text-2xl font-bold mt-10">
            МЕЖДУНАРОДНЫЕ <span className="text-[#30AAE2]">ТЕСТЫ</span>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {arr.map((item) => (
              <div key={item.id} className="z-30 mt-10 bg-white shadow-xl rounded-xl">
                <div className="flex pt-[75px] pb-[40px] items-center">
                  <Image
                    src="/images/linguaskill-logo.png"
                    width={89}
                    height={85}
                    alt=""
                    className="pl-3"
                  />
                  <h1 className="text-center w-full text-[30px]">{item.title}</h1>
                </div>
                <p className="px-3 text-lg text-center">
                  {item.body}
                </p>
                <div className="flex justify-center pt-4 pb-8">
                  <Link href={`${item.link}`} target="_blank">
                    <span className="text-[#30AAE2] font-medium text-lg hover:text-black duration-200">Перейти</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
const Container = tw.div`container mx-auto`;

export default international;
