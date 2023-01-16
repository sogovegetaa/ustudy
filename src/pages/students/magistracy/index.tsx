import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/Button';
import LightButton from '../../../components/LightButton';
function Magistracy() {
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
                Магистратура

              </div>
              <p className="mb-8 text-xl font-medium">
                <br />
                Комплексное тестирование, состоящее из теста по иностранному
                языку (английский, французский, немецкий по выбору), теста по
                профилю группы образовательных программ, теста на определение
                готовности к обучению на казахском или русском языке;
                <br /> <br />
                Онлайн - 4 000 тг, сайт:
                <Link href="http://prob-pvo.testcenter.kz/" target="_blank">
                  <span className="text-[#30AAE2]">
                    http://prob-pvo.testcenter.kz/
                  </span>
                </Link>{' '}
                <br />
                Офлайн – 4 000тг
              </p>
              <div className="flex mb-[200px] ">
                <Button>Пройти онлайн</Button>
                <LightButton>Пройти оффлайн</LightButton>
              </div>
            </div>
            <div className="hidden md:col-span-5 md:block">
              <Image src="/images/magistracy.png" width={540} height={460} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
const Container = tw.div`container mx-auto`;
export default Magistracy;
