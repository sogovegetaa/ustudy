import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import tw from "twin.macro";
import Image from "next/image";
import Link from "next/link";
import Button from "../../../components/Button";
import LightButton from "../../../components/LightButton";
function Toeflitp() {
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
          <div className="grid  md:grid-cols-12 gap-12 pt-[118px]">
            <div className="md:col-span-7">
              <div className="text-4xl font-bold ">
                TOEFL ITP
                <br />
                <span className="text-[#30AAE2]">
                  (Test of English as a Foreign Language Institutional Testing
                  Program)
                </span>
              </div>
              <p className="mb-8 text-xl font-medium">
                <br />
                Международный сертификат<br /> • Сертификат действителен 2 года<br /> • Для
                получения наивысшего балла по профильному предмету иностранный
                язык на ЕНТ<br /> • Для поступления в докторантуру<br /> • Для поступления в
                зарубежный вуз<br /> • Для работы в международной компании<br /> • Для
                получения доплаты в размере 200% от базового должностного оклада<br /><br />
                Стоимость - 45 000 тг
              </p>
              <div className="flex mb-[200px] ">
                <Button>Зарегистрироваться</Button>
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
export default Toeflitp;
