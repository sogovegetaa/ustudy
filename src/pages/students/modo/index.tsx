import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/Button';
import LightButton from '../../../components/LightButton';
function Modo() {
  return (
    <div>
      <Header />
      <div className="relative z-40">
        <Image
          src="/images/small-dots.png"
          width={72}
          height={75}
          alt=""
          className="absolute top-0 left-[24%]"
        />
        <Image
          src="/images/bg-img.png"
          width={150}
          height={64}
          alt=""
          className="absolute bottom-0 left-[50%]"
        />
        <Image
          src="/images/bg-img.png"
          width={150}
          height={64}
          alt=""
          className="absolute left-[-75px] top-[45%]"
        />
        <Image
          src="/images/swiper-circle.png"
          width={212}
          height={212}
          alt=""
          className="absolute bottom-[-106px] right-0 z-40"
        />
        <Container>
          <div className="grid grid-cols-12 gap-12 pt-[118px]">
            <div className="col-span-7">
              <div className="text-4xl font-bold ">
                Мониторинг образовательных достижений обучающихся
                <br />
                <span className="text-[#30AAE2]">(МОДО)</span>
              </div>
              <p className="mb-8 text-xl font-medium">
                <br />
                МОДО включает в себя обработку и системный анализ результатов
                тестирования с последующим оказанием методической помощи и
                выработкой рекомендаций по обеспечению качества образования.{' '}
                <br /> <br />
                Онлайн - 1 000 тг, сайт:
                <Link href="https://uapp.kz/login" target="_blank">
                  <span className="text-[#30AAE2]">https://u-edu.kz/ </span>
                </Link>{' '}
                <br />
                предусмотрены пакетные предложения
              </p>

              <div className="flex mb-[200px] ">
                <Button>Пройти онлайн</Button>
                <LightButton>Пройти оффлайн</LightButton>
              </div>
            </div>
            <div className="col-span-5">
              <Image src="/images/modo.png" width={540} height={460} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
const Container = tw.div`container mx-auto`;
export default Modo;
