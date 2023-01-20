import React from "react";
import tw from "twin.macro";
import Header from "../../../components/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";
let arr = [
  {
    id: 1,
    title: "LINGUASKILL",
    body: "Тестирование на знание английского языка для поступления  в зарубежные ВУЗы и NAZARBAYEV UNIVERSITY",
    price: "55 000 тг",
    link: "/international/tds/linguaskill",
  },
  {
    id: 2,
    title: "TDS",
    body: "Тестирование на знание турецкого языка для поступления в ВУЗы Турции",
    price: "130 долларов (основной) 20 долларов (пробный)",
    link: "/international/tds/tdspost",
  },
];
function Tds() {
  return (
    <div>
      <Header />
      <div className="relative">
        <Image
          src="/images/swiper-circle.png"
          width={212}
          height={212}
          alt=""
          className="absolute top-0 right-0 z-20 hidden md:block"
        />
        <Image
          src="/images/swiper-circle.png"
          width={212}
          height={212}
          alt=""
          className="absolute bottom-0 left-0 z-20 hidden md:block"
        />
        <Container>
          <div className=" text-[48px] font-bold mt-10">TDS / Linguaskill</div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {arr.map((item) => (
              <div
                key={item.id}
                className="z-30 mt-12 bg-white shadow-xl rounded-xl"
              >
                <div className="flex flex-col pt-[64px]">
                  <div className="flex justify-center">
                    <Image
                      src="/images/linguaskill-logo2.png"
                      width={172}
                      height={166}
                      alt=""
                    />
                  </div>
                  <h1 className="text-[32px] font-medium text-center px-[60px]">
                    {item.title}
                  </h1>
                  <p className="pt-[30px] text-[#30AAE2] font-medium text-2xl text-center">
                    {item.price}
                  </p>
                  <p className="text-center text-xl pt-[30px]">{item.body}</p>
                  <Link href={`${item.link}`}>
                    <p className="py-[30px] text-center text-[#30AAE2] font-medium text-xl hover:text-black duration-200">
                      Зарегистрироваться
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
const Container = tw.div`container mx-auto`;
export default Tds;
