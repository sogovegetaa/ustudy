import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/Button';
import LightButton from '../../../components/LightButton';
function Uapp() {
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
          className="absolute bottom-[-106px] left-[-106px]"
        />
        <Container>
          <div className="grid grid-cols-2 gap-12 pt-[118px]">
            <div>
              <div className=" text-[48px] font-bold">
                ЕНТ <span className="text-[#30AAE2]">(UAPP)</span>
              </div>
              <p className="mb-8 text-xl font-medium">
                Проверка базовых знаний, помощь выпускникам в определении
                собственного уровня базовых знаний в рамках средней школы для
                обеспечения мотивации к дальнейшей учёбе в ВУЗе и
                совершенствованию знаний. <br /> <br />
                Онлайн – 1 000 тг, сайт:
                <Link href="https://uapp.kz/login" target="_blank">
                  <span className="text-[#30AAE2]"> http://uapp.kz/login</span>
                </Link>{' '}
                <br />
                Пробные тесты по ЛИНКУ (офлайн) – 1 500 тг предусмотрены
                пакетные предложения
              </p>
              <div className="flex mb-[200px]">
                <Button>Пройти онлайн</Button>
                <LightButton>Пройти оффлайн</LightButton>
              </div>
            </div>
            <div>
              <Image
                src="/images/uapp-bg.png"
                width={540}
                height={460}
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
export default Uapp;
