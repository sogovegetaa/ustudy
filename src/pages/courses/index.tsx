import React from "react";
import ForCourses from "../../components/ForCourses";
import Header from "../../components/Header";
import tw from "twin.macro";
import Image from "next/image";
import Footer from "../../components/Footer";
import Head from "next/head";
function Courses() {
  return (
    <>
      <Head>
        <title>Курсы и обучение</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="relative pt-[50px]">
        <Image
          src="/images/swiper-circle.png"
          width={212}
          height={212}
          alt=""
          className="absolute top-0 right-[15%] z-10 hidden md:block"
        />
        <Image
          src="/images/bg-img3.png"
          width={90}
          height={93}
          alt=""
          className="absolute top-1/2 right-[25%] z-10 hidden md:block"
        />
        <Image
          src="/images/swiper-circle.png"
          width={212}
          height={212}
          alt=""
          className="absolute bottom-0 z-10 hidden left-1/2 md:block"
        />
        <Image
          src="/images/bg-img.png"
          width={154}
          height={64}
          alt=""
          className="absolute z-10 hidden left-1/2 top-1/2 md:block"
        />
        <Image
          src="/images/bg-img3.png"
          width={174}
          height={94}
          alt=""
          className="absolute top-[40%] left-[25%] z-10 hidden md:block"
        />
        <Container>
          <h1 className="text-[48px] text-[#383736] font-bold uppercase pb-[25px] mt-10">
            Курсы и обучение
          </h1>
          <ForCourses />
        </Container>
      </div>
      <Footer />
    </>
  );
}
const Container = tw.div`container mx-auto`;
export default Courses;
