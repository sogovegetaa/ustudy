import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/Button';
import LightButton from '../../../components/LightButton';
function University() {
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
              <div className="text-4xl font-bold ">Тесты для вузов</div>
              <p className="mb-8 text-xl font-medium">
                <br />
                Тест разработан с целью проведения государственного контроля,
                для высшего и послевузовского образования по группам
                образовательных программ студентов. Для определения уровня
                знаний студентов, обучающихся в организациях высшего образования
                РК,<br/> Предметы:<br/> Қазақстанның қазіргі заман тарихы/ История
                современного Казахстана<br/> Философия (каз/рус);<br/> АКТ/ИКТ <br/>Оқу
                дағдылары/ Навыки обучения (каз/рус)<br/><br/>   Офлайн – 3 063 тг<br/>
                предусмотрены пакетные предложения
              </p>
              <div className="flex mb-[200px] ">
                <Button>Зарегистрироваться</Button>
              </div>
            </div>
            <div className="col-span-5">
              <Image
                src="/images/university.png"
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
export default University;
