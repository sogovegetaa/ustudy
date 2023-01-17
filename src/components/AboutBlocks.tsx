import Image from "next/image";
import React from "react";
import tw from "twin.macro";
let arr = [
  {
    title: "ИДЕНТИФИКАЦИЯ ЛИЧНОСТИ FACE ID",
    body: "Данная система распознает и распределяет по местам тестируемых. Определяет температуру тела в связи с эпидемиологическими нормам",
  },
  {
    title: "ИДЕНТИФИКАЦИЯ ЛИЧНОСТИ WEB ID",
    body: "Через веб камеру тестируемый проходит идентификацию лица перед началом теста на рабочем столе. После, каждые 50 минут происходит промежуточная идентификация",
  },
  {
    title: "СИСТЕМА <br/> ПРОКТОРИНГА",
    body: "Искусственный интеллект выявляет нарушения посредством IP камер (использование телефона, шпаргалок и т.д.) и передаются в уведомительном порядке в Ситуационный центр",
  },
  {
    title: "СИТУАЦИОННЫЙ <br/> ЦЕНТР",
    body: "Для наблюдения за каждым тестируемым установлены IP камеры над рабочей зоной тестируемого и просматриваются проверяющими. Данные записи архивируется на серверах",
  },
  {
    title: "ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ",
    body: "ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ",
  },
  {
    title: "СИСТЕМА <br/>ТЕСТИРОВАНИЯ",
    body: "Автоматизированная система тестирования без участия человеческого фактора",
  },
];

function AboutBlocks() {
  return (
    <div className="relative pb-[75px]">
      <Image
        src="/images/bg-dots.png"
        alt=""
        width={150}
        height={74}
        className="absolute top-[15%] right-[10%] z-30"
      />
      <Image
        src="/images/bg-img3.png"
        alt=""
        width={90}
        height={93}
        className="absolute bottom-[15%] left-[10%] z-30"
      />
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-[25px]">
          {arr.map((item) => (
            <div key={item.title} className="bg-white p-[22px] rounded-xl shadow-xl  z-40">
              <div
                className="uppercase text-[#30AAE2] md:text-[36px] text-2xl md:text-left text-center font-bold w-[80%]"
                dangerouslySetInnerHTML={{ __html: `${item.title}` }}
              />
              <p className="pt-[23px] text-[18px] w-[75%] pb-[15px]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
const Container = tw.div`container mx-auto`;
export default AboutBlocks;
