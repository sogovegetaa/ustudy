import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import tw from "twin.macro";
import Image from "next/image";
import Link from "next/link";
import Button from "../../../components/Button";
import LightButton from "../../../components/LightButton";
function Cert() {
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
                Тест на знание английского языка{" "}
                <span className="text-[#30AAE2]">
                  Cambridge English Placement Test (CEPT)
                </span>
              </div>
              <p className="mb-8 text-xl font-medium">
                <br />
                Данный экзамен Cambridge дает всестороннюю оценку достижений в
                изучении английского языка. Сертификат Cambridge Assessment
                English имеет международное признание и не имеет срока
                давности.Экзамен определяет уровень владения английского языка в
                соответствии Общеевропейской шкалой языковой компетенции (CEFR).<br/><br/>
                6 000 тг (пробный онлайн)<br/> 8 000 тг (в РЦТ основной)
              </p>
              <div className="flex mb-[200px] ">
                <Button>Пройти онлайн</Button>
                <LightButton>Пройти оффлайн</LightButton>
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
export default Cert;
