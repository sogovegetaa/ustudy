import Image from "next/image";
import Link from "next/link";
import React from "react";
let arr = [
  {
    id: 1,
    title: "Курс подготовки к ЕНТ (в РЦТ)",
    link: "/courses/preparation",
  },
  {
    id: 2,
    title: "Курс подготовки к ЕНТ (онлайн)",
    link: "/courses/entpreparation",
  },
  {
    id: 3,
    title: "Курсы для будущих руководителей",
    link: "/courses/futuremanagers",
  },
];
function ForCourses() {
  return (
    <>
      <div>
        <div className="grid grid-cols-3 gap-5 ">
          {arr.map((item) => (
            <div
              key={item.id}
              className="z-20 flex flex-col items-center mt-6 bg-white shadow-xl rounded-xl"
            >
              <Image
                src="/images/ustudy-logo.png"
                width={172}
                height={166}
                alt=""
                className="pt-[64px] pb-[30px]"
              />
              <p className="text-lg font-medium pb-[38px] text-center px-12">
                {item.title}
              </p>
              <Link href={`${item.link}`} target="_blank">
                <p className="text-lg font-medium pb-[38px] text-[#30AAE2]">
                  Перейти
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ForCourses;