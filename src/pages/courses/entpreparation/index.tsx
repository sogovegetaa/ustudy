import Image from "next/image";
import React from "react";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import LightButton from "../../../components/LightButton";
import tw from "twin.macro";
function Entpreparation() {
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
                Курс подготовки к ЕНТ
                <span className="text-[#30AAE2]">(онлайн)</span>
              </div>
              <p className="mb-8 text-xl font-medium">
                <br />
                Подготовка учащихся 10 и 11 классов СШ к ЕНТ (5 предметов) +
                видеоуроки + пробные тесты <br /> <br />
                 Стоимость - 79 000 тг. / год <br/> 8 700 тг
                /мес
              </p>
              <div className="flex mb-[200px] ">
                <Button>Зарегистрироваться</Button>
              </div>
            </div>
            <div className="col-span-5">
              <Image
                src="/images/modo.png"
                width={400}
                height={250}
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
export default Entpreparation;
