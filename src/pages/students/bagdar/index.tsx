import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/Button';
import LightButton from '../../../components/LightButton';
function Bagdar() {
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
            <div className="md:col-span-6">
              <div className="text-3xl font-bold md:text-4xl ">
                Профориентационные тесты
              </div>
              <p className="mb-8 text-xl font-medium">
                <br />
                1. Для школьников 5-8 классов, мы предлагаем тестовый комплекс,
                состоящий из 5 тестов, который предназначен для раннего
                определения профессиональной направленности школьников среднего
                звена, учитывающей оценку интересов и склонностей, способностей,
                мотивации, ориентацию на генеалогию профессий в семье и
                успеваемость для объективного выбора профиля обучения в старшем
                звене школы. <br />
                2. Для школьников 9-11 классов предлагаем тестовый комплект,
                состоящий из 5 тестов, который предназначен для комплексной
                диагностики профессиональной направленности старшеклассников,
                выпускников и абитуриентов, с учетом оценки склонностей,
                способностей, мотивации, объективных показателей успеваемости и
                медицинских противопоказаний к выбору в ряде профессий. <br />
                Для взрослых предлагаем пройти тестовый комплекс, состоящий из 5
                тестов, который предназначен для выбора профессии в ситуации
                получения второго образования или перепрофилирования. Оценка
                происходит с учетом желания и готовности выполнять ряд
                профессиональных задач и действий, напрямую связанных с той или
                иной профессией, и отраслью. Выбор происходит с учетом мотивации
                и отсутствия явных медицинских противопоказаний к работе. Онлайн
                – 1 000 тг, сайт : www.bagdar.kz Офлайн – 1 500 тг
                <br /> <br />
                Онлайн – 1 000 тг, сайт:
                <Link href="https://www.bagdar.kz/" target="_blank">
                  <span className="text-[#30AAE2]">https://www.bagdar.kz/</span>
                </Link>{' '}
                <br />
                Офлайн – 1 500 тг
              </p>

              <div className="flex mb-[200px] ">
                <Button>Пройти онлайн</Button>
                <LightButton>Пройти оффлайн</LightButton>
              </div>
            </div>
            <div className="hidden md:col-span-6 md:block">
              <Image src="/images/bagdar.png" width={840} height={545} alt="" />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
const Container = tw.div`container mx-auto`;
export default Bagdar;
