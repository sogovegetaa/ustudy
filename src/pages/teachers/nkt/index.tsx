import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/Button';
import LightButton from '../../../components/LightButton';
function Nkt() {
  return (
    <div>
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
                НКТ <span className="text-[#30AAE2]">(дошкольное)</span> НКТ{' '}
                <span className="text-[#30AAE2]">(доп. образование)</span>
              </div>
              <p className="mb-8 text-xl font-medium">
                <br />
                Определение соответствия педагогического работника и
                приравненных к ним лиц квалификационным требованиям на основе
                оценки его профессиональной компетентности, а также для
                обеспечения единого подхода при проведении аттестации
                педагогических работников организаций образования.
                <br /> <br />
                Онлайн – 3 063 тг, сайт:
                <Link href="http://uapp.kz/login" target="_blank">
                  <span className="text-[#30AAE2]">http://uapp.kz/login</span>
                </Link>{' '}
                <br />
                Пробные тесты по ЛИНКУ (офлайн) – 4 000 тг <br />
                предусмотрены пакетные предложения
              </p>
              <div className="flex mb-[200px] ">
                <Button>Пройти онлайн</Button>
                <LightButton>Пройти оффлайн</LightButton>
              </div>
            </div>
            <div className="hidden md:col-span-5 md:block">
              <Image src="/images/nkt.png" width={480} height={490} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
const Container = tw.div`container mx-auto`;
export default Nkt;
