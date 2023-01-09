import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/Button';
import LightButton from '../../../components/LightButton';
function AdminControlPage() {
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
                Административный контроль
              </div>
              <p className="mb-8 text-xl font-medium">
                <br />
                Осуществление контроля качества подготовки обучающихся в
                соответствии с требованиями Государственных общеобязательных
                стандартов среднего образования, (4-9 классы).
                <br /> <br />
                Онлайн – 1 500 тг, сайт:
                <Link href="https://ustudy-miras.kz/" target="_blank">
                  <span className="text-[#30AAE2]">
                    https://ustudy-miras.kz/{' '}
                  </span>
                </Link>{' '}
                <br />
                Пробные тесты по ЛИНКУ (офлайн) – 1 500 тг <br /> предусмотрены
                пакетные предложения
              </p>

              <div className="flex mb-[200px] ">
                <Button>Пройти онлайн</Button>
                <LightButton>Пройти оффлайн</LightButton>
              </div>
            </div>
            <div className="col-span-5">
              <Image
                src="/images/admin-control.png"
                width={350}
                height={480}
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
export default AdminControlPage;
