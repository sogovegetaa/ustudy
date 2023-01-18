import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import tw from "twin.macro";
import Header from "../components/Header";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import Filials from "../components/Filials";
import Eye from "@mui/icons-material/RemoveRedEyeOutlined";
import Footer from "../components/Footer";
let arr = [
  {
    id: 1,
    title: "Тесты в образований",
    link: "/education",
    image: "/images/tests-img1.png",
  },
  {
    id: 2,
    title: "Международные тесты",
    link: "/international",
    image: "/images/tests-img2.png",
  },
  {
    id: 3,
    title: "Курсы и обучение",
    link: "/courses",
    image: "/images/tests-img3.png",
  },
  {
    id: 4,
    title: "Пробные тесты",
    link: "/trials",
    image: "/images/tests-img4.png",
  },
];
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Главная страница</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container className="pt-5">
        <h1 className="md:text-5xl text-3xl uppercase text-[#383736] font-bold">
          Центр тестирования <span className="text-[#30aae2]">"U-STUDY"</span>
        </h1>
      </Container>
      <div className="relative pb-[120px]">
        <div className="absolute right-[27%] z-30">
          <Image src="/images/bg-img.png" width={153} height={63} alt="" />
        </div>
        <div className="absolute left-0 top-[50%] z-30">
          <Image src="/images/bg-img2.png" width={153} height={63} alt="" />
        </div>
        <div className="absolute bottom-0 left-[15%] z-30">
          <Image src="/images/bg-img3.png" width={63} height={63} alt="" />
        </div>
        <Container>
          <div className="grid grid-cols-1 md:gap-8 lg:gap-4 md:grid-cols-2 lg:grid-cols-4">
            {arr.map((item) => (
              <TestBlock key={item.id}>
                <div className="flex items-center justify-between pb-5 text-xl">
                  {item.title}
                  <Link href={`${item.link}`}>
                    <p className="relative p-1 text-sm text-black bg-white rounded-full">
                      <ArrowForwardIcon />
                    </p>
                  </Link>
                </div>
                <div className="flex justify-center pt-[18px]">
                  <Image
                    src={`${item.image}`}
                    width={170}
                    height={170}
                    alt="test image"
                  />
                </div>
              </TestBlock>
            ))}
          </div>
        </Container>
      </div>
      <Container>
        <h1 className="md:text-[55px] text-[42px] uppercase text-[#383736] font-bold">
          <span className="text-[#30aae2]">О нашей</span> компании
        </h1>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col justify-center 2xl:col-span-2 md:col-span-2">
            <p className="text-[#383736]  text-lg  font-medium">
              Сеть UStudy состоит из 56 региональных центров тестирования,
              расположенных в 3 городах республиканского значения, 14 областных
              центрах, районных центрах и моногородах Республики Казахстан.
              Общее количество посадочных мест составляет 6 320 единиц. На
              создание сети инфраструктуры было привлечено более 8 млрд. тенге
              частных инвестиции.
            </p>
            <div className="flex pt-10 mb-10 text-lg font-bold uppercase md:mb-12">
              <p>Подробнее</p>
              <p className="relative p-1 ml-10 text-sm text-white bg-black rounded-full cursor-pointer">
                <ArrowForwardIcon />
              </p>
            </div>
          </div>
          <div className="justify-end hidden mb-12 2xl:col-span-1 md:col-span-1 md:block">
            <Image src="/images/about-us.png" width={700} height={430} alt="" />
          </div>
        </div>
      </Container>
      <Filials />
      <div className="pt-[120px] relative">
        <div className="absolute right-[67px] top-[49px] z-30 md:block hidden">
          <Image src="/images/bg-dots.png" width={153} height={63} alt="" />
        </div>
        <div className="absolute bottom-[15%] left-[43px] z-30 md:block hidden">
          <Image src="/images/bg-dots.png" width={153} height={63} alt="" />
        </div>
        <Container>
          <h1 className="md:text-[55px] text-[35px]  uppercase text-[#383736] font-bold pl-12">
            Последние <span className="text-[#30aae2]">публикации</span>
          </h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="p-12">
              <div className="flex justify-center">
                <Image
                  src="/images/news1.png"
                  width={540}
                  height={380}
                  alt=""
                />
              </div>
              <p className="flex justify-between mt-5 mb-4 text-base ">
                <span>15.12.2021</span>
                <span>
                  <Eye />
                  10
                </span>
              </p>
              <p className="mb-3 text-2xl ">Это текст компании</p>
              <p className="text-base ">
                Это текст о компании. Он необходим для дальнейшего продвижения
                Вашего сайта. Вам будет необходимо предоставить исходные данные,
                по которым
              </p>
              <div className="pt-10 uppercase font-bold text-lg flex text-[#30AAE2]">
                <p>Подробнее</p>
                <p className="text-white bg-[#30AAE2] rounded-full relative p-1 text-sm ml-10 cursor-pointer">
                  <ArrowForwardIcon />
                </p>
              </div>
            </div>
            <div className="p-12">
              <div className="flex justify-center">
                <Image
                  src="/images/news2.png"
                  width={540}
                  height={380}
                  alt=""
                />
              </div>
              <p className="flex justify-between mt-5 mb-4 text-base ">
                <span>15.12.2021</span>
                <span>
                  <Eye />
                  10
                </span>
              </p>
              <p className="mb-3 text-2xl ">Это текст компании</p>
              <p className="text-base ">
                Это текст о компании. Он необходим для дальнейшего продвижения
                Вашего сайта. Вам будет необходимо предоставить исходные данные,
                по которым
              </p>
              <div className="pt-10 uppercase font-bold text-lg flex text-[#30AAE2]">
                <p>Подробнее</p>
                <p className="text-white bg-[#30AAE2] rounded-full relative p-1 text-sm ml-10 cursor-pointer">
                  <ArrowForwardIcon />
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
const Container = tw.div`
container
mx-auto
`;
const TestBlock = tw.div`
bg-[#30AAE2] rounded-2xl pt-[60px] pb-[30px] px-[20px] md:mt-12 mt-5 text-white hover:opacity-80 duration-200 z-40
`;
export default Home;