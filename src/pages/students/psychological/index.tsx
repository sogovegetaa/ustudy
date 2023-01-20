import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/Button';
import LightButton from '../../../components/LightButton';
function Psychological() {
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
              <div className="pb-12 text-4xl font-bold">
                Психологические тесты
              </div>
              <p className="pb-12 mb-8 text-xl font-medium">
                Онлайн – 1 000 тг, сайт:
                <Link href="https://bagdar.kz/" target="_blank">
                  <span className="text-[#30AAE2]">https://bagdar.kz/</span>
                </Link>{' '}
                <br />
                Офлайн – 1 500 тг
              </p>

              <div className="flex mb-[200px] ">
                <Link href="https://bagdar.kz/"><Button>Пройти онлайн</Button></Link>
                
                <Link href="/students/psychological/psych-post"><LightButton>Пройти оффлайн</LightButton></Link>
                
              </div>
            </div>
            <div className="hidden md:col-span-5 md:block">
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
export default Psychological;
