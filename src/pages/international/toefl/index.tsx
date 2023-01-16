import React from "react";
import tw from "twin.macro";
import Header from "../../../components/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/Footer";
let arr = [
  {
    id: 1,
    title: "Тесты TOEFL Primary",
    body: "Для детей от 8 до 11 лет, изучающих английский язык",
    price: "45 000 тг",
    link: "#",
  },
  {
    id: 2,
    title: "Тесты TOEFL Junior Standard",
    body: "Для детей от 11 лет, изучающих английский язык",
    price: "45 000 тг",
    link: "#",
  },
  {
    id: 3,
    title: "Обучающий материал TOEFL Primary ELC",
    body: "Для детей от 8 до 11 лет, изучающих английский язык",
    price: "45 000 тг",
    link: "#",
  },
  {
    id: 4,
    title: "Обучающий материал TOEFL Junior ELC",
    body: "Для детей от 11 лет, изучающих английский язык",
    price: "45 000 тг",
    link: "#",
  },
];
function Toefl() {
  return (
    <div>
      <Header />
      <div className="relative">
        <Image
          src="/images/swiper-circle.png"
          width={212}
          height={212}
          alt=""
          className="absolute top-0 right-0 z-20"
        />
        <Image
          src="/images/swiper-circle.png"
          width={212}
          height={212}
          alt=""
          className="absolute bottom-0 left-0 z-20"
        />
        <Container>
          <div className=" text-[48px] font-bold mt-10">TOEIC/ TFI</div>
          <div className="grid grid-cols-3 gap-8">
            {arr.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-xl rounded-xl mt-12 z-30"
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
export default Toefl;
