import Image from 'next/image';
import React from 'react';
import tw from 'twin.macro';
import ForStudentBlock from './ForStudentBlock';
import ForTeachersBlock from './ForTeachersBlock';
import ForAnotherBlock from './ForAnotherBlock';
import Footer from './Footer';
function ForStudents() {
  return (
    <>
      <div className="relative pt-[50px]">
        <Image
          src="/images/swiper-circle.png"
          width={212}
          height={212}
          alt=""
          className="absolute top-0 right-[15%] z-10"
        />
        <Image
          src="/images/bg-img3.png"
          width={90}
          height={93}
          alt=""
          className="absolute top-1/2 right-[25%] z-10"
        />
        <Image
          src="/images/swiper-circle.png"
          width={212}
          height={212}
          alt=""
          className="absolute bottom-0 z-10 left-1/2"
        />
        <Image
          src="/images/bg-img.png"
          width={154}
          height={64}
          alt=""
          className="absolute z-10 left-1/2 top-1/2"
        />
        <Image
          src="/images/bg-img3.png"
          width={174}
          height={94}
          alt=""
          className="absolute top-[40%] left-[25%] z-10"
        />
        <Container>
          <h1 className="text-[48px] text-[#383736] font-bold uppercase pb-[25px]">
            Ученикам
          </h1>
          <ForStudentBlock />
        </Container>
      </div>
      <div className="relative">
        <Image
          src="/images/bg-img.png"
          width={154}
          height={64}
          alt=""
          className="absolute z-10 right-[14%] top-[15%]"
        />
        <Image
          src="/images/bg-img3.png"
          width={90}
          height={93}
          alt=""
          className="absolute top-[15%] right-[40%] z-10"
        />
        <Container>
          <h1 className="text-[48px] text-[#383736] font-bold uppercase pb-[25px] mt-10">
            Педагогам
          </h1>
          <ForTeachersBlock />
        </Container>
      </div>
      <div className="relative pb-[90px]">
        <Image
          src="/images/bg-img.png"
          width={154}
          height={64}
          alt=""
          className="absolute z-10 left-[2%] top-0"
        />
        <Image
          src="/images/bg-img3.png"
          width={180}
          height={186}
          alt=""
          className="absolute top-0 right-[12%] z-10"
        />
        <Container>
          <h1 className="text-[48px] text-[#383736] font-bold uppercase pb-[25px] mt-10">
            Тесты для студентов/ прочие тесты
          </h1>
          <ForAnotherBlock />
        </Container>
      </div>
      <Footer />
    </>
  );
}
const Container = tw.div`container mx-auto`;

export default ForStudents;
