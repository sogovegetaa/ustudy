import React from "react";
import tw from "twin.macro";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Head from "next/head";
let arr = [
  {
    id: 1,
    title: "«Старт»",
    body: "1 тест.<br/> Один вариант состоит из 40 вопросов<br/> Во время тестирования вы можете выбирать вопрос с помощью клавишь «Предыдущий» и «Следующий». Время для тестирования -  неограниченное Предусмотрена возможность просмотреть пройденные варианты.",
    price: "Онлайн 3063 тг",
    link: "#",
  },
  {
    id: 2,
    title: "«Оптимальный»",
    body: "1 тест.<br/> Один вариант состоит из 40 вопросов<br/> Во время тестирования вы можете выбирать вопрос с помощью клавишь «Предыдущий» и «Следующий». Время для тестирования -  неограниченное Предусмотрена возможность просмотреть пройденные варианты.",
    price: "Онлайн 4990 тг",
    link: "#",
  },
  {
    id: 3,
    title: "«Выгодный»",
    body: "1 тест.<br/> Один вариант состоит из 40 вопросов<br/> Во время тестирования вы можете выбирать вопрос с помощью клавишь «Предыдущий» и «Следующий». Время для тестирования -  неограниченное Предусмотрена возможность просмотреть пройденные варианты.",
    price: "Онлайн 9990 тг",
    link: "#",
  },
];
function Trials() {
  return (
    <div>
      <Head>
        <title>Пробные тесты</title>
      </Head>
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
          <div className=" text-[48px] font-bold mt-10">TOEIC/ TFI</div>
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
                  <div className="text-center text-xl pt-[30px] md:px-12 px-2 pb-8">
                    <div dangerouslySetInnerHTML={{ __html: `${item.body}` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="http://qaztesting.kz/" target="_blank">
              <Button>Перейти на сайт</Button>
            </Link>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
const Container = tw.div`container mx-auto`;
export default Trials;
