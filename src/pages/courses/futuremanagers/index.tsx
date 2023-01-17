import Image from "next/image";
import React from "react";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LightButton from "../../../components/LightButton";
import tw from "twin.macro";
import Head from "next/head";
function Futuremanagers() {
  return (
    <div>
      <Head>
        <title>Курсы для будущих руководителей</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="relative z-40">
        <Image
          src="/images/small-dots.png"
          width={72}
          height={75}
          alt=""
          className="absolute top-0 left-[24%] hidden md:block"
        />
        <Image
          src="/images/bg-img.png"
          width={150}
          height={64}
          alt=""
          className="absolute bottom-0 left-[50%] hidden md:block"
        />
        <Image
          src="/images/bg-img.png"
          width={150}
          height={64}
          alt=""
          className="absolute left-[-75px] top-[45%] hidden md:block"
        />
        <Image
          src="/images/swiper-circle.png"
          width={212}
          height={212}
          alt=""
          className="absolute bottom-[-106px] right-0 z-40 hidden md:block"
        />
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-[118px]">
            <div className="md:col-span-7">
              <div className="text-4xl font-bold ">
                Курсы для будущих руководителей
              </div>
              <p className="mb-8 text-xl font-medium">
                <br />
                Тестирование на знание законодательства:
                <br />
                Конституции РК;
                <br />
                Трудового кодекса РК; <br />
                Закона РК «Об образовании»;
                <br />
                Закона РК «О противодействии коррупции»;
                <br />
                Закона РК «О статусе педагога» <br />
                Управленческие компетенции
                <br />
                Основы педагогики, психологии
                <br />
                Дополнительно предагаются 2 пробных теста
                <br />
                <br />
                Онлайн- 50 000 тг
              </p>
              <div className="flex mb-[200px] ">
                <Button>Зарегистрироваться</Button>
              </div>
            </div>
            <div className="hidden md:col-span-5 md:block">
              <Image
                src="/images/manager.png"
                width={400}
                height={390}
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
const Container = tw.div`container mx-auto`;
export default Futuremanagers;
