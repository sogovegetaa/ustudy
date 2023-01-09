import React from "react";
import Header from "../../components/Header";
import tw from "twin.macro";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";
import Footer from "../../components/Footer";
import Image from "next/image";
import AboutSwiper from "../../components/AboutSwiper";
import AboutBlocks from "../../components/AboutBlocks";
import Filials from "../../components/Filials";
import Button from "../../components/Button";
function about() {
  return (
    <div>
      <Header />
      <div className="bg-[#f6f6f6] pt-[20px]">
        <AboutUsBg>
          <Container>
            <div className="pt-[59px] text-[48px] font-bold">
              О компаний <br />
              <span className="text-[#30AAE2]">"U-Study"</span>
            </div>
            <div className="w-1/3 text-base pt-[24px]">
              Сеть UStudy состоит из 56 региональных центров тестирования,
              расположенных в 3 городах республиканского значения, 14 областных
              центрах, районных центрах и моногородах Республики Казахстан.
              Общее количество посадочных мест составляет 6 320 единиц. На
              создание сети инфраструктуры было привлечено более 8 млрд. тенге
              частных инвестиции.
            </div>
            <div className="flex flex-wrap pt-[25px] items-center pb-[59px]">
              <GetConsultation>Получить консультацию </GetConsultation>
              <PlayButton>
                <PlayArrowIcon />
              </PlayButton>
              <Link href="#">
                <VideoLink>Просмотреть видео</VideoLink>
              </Link>
            </div>
          </Container>
        </AboutUsBg>
      </div>
      <Container>
        <div className="grid grid-cols-2 gap-10 pt-[100px] pb-[145px] relative">
          <Image
            src="/images/bg-dots.png"
            width={150}
            height={74}
            alt=""
            className="absolute bottom-0 left-0"
          />
          <div className="border-l border-l-[5px] border-[#30AAE2] pl-[20px]">
            <p className="pb-1 text-2xl">Цели компаний:</p>
            <ul className="text-lg">
              <li className="pb-1">• Цифровизации в сфере образования</li>
              <li className="pb-1">• Обеспечение академической честности</li>
              <li>• Антикоррупционное сознание у населения</li>
            </ul>
          </div>
          <div className="border-l border-l-[5px] border-[#30AAE2] pl-[20px]">
            <p className="pb-1 text-2xl">Основные направления:</p>
            <ul className="text-lg">
              <li className="pb-1">• Тестирование в сфере образование</li>
              <li className="pb-1">• Тестирование в кооперативном секторе</li>
              <li className="pb-1">• Обучение</li>
              <li>• Международное сотрудничество</li>
            </ul>
          </div>
        </div>
      </Container>
      <Container>
        <div className="pt-[59px] text-[48px] font-bold uppercase">
          История <span className="text-[#30AAE2]"> комапнии</span>
        </div>
      </Container>
      <div className="py-[90px]">
        <AboutSwiper />
      </div>
      <AboutBlocks />
      <Filials />
      <Footer />
    </div>
  );
}
const Container = tw.div`
container mx-auto
`;
const AboutUsBg = tw.div`
bg-[url('/images/about-usbg.png')] bg-no-repeat	bg-center pt-[20px]
`;
const GetConsultation = tw.button`
bg-[#30AAE2] py-[16px] px-[27px] rounded-full text-white hover:bg-black duration-200 shadow-2xl
`;
const PlayButton = tw.button`
text-[#30AAE2] bg-white p-[16px] rounded-full ml-5 shadow-2xl hover:bg-black duration-200
`;
const VideoLink = tw.p`
text-[#30AAE2] text-lg font-medium ml-5 hover:text-black duration-200
`;
export default about;
