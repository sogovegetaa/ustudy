import React from "react";
import tw from "twin.macro";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black py-[38px] z-50 relative mt-12">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Image src="/images/Logo.png" width={153} height={57} alt="" />
          </div>
          <FooterNav>Главная</FooterNav>
          <FooterNav>О нас</FooterNav>
          <FooterNav>Филиалы</FooterNav>
          <FooterNav>Партнеры</FooterNav>
          <FooterNav>Новости</FooterNav>
          <FooterNav>Контакты</FooterNav>
        </div>
        <div className="flex items-center justify-between pt-5">
          <div className="text-center text-white">
            <InstagramIcon sx={{ marginRight: "10px" }} />{" "}
            <FacebookIcon sx={{ marginRight: "10px" }} /> <YouTubeIcon />
          </div>
          <div className="text-white">
            <span className="font-bold">Номер телефона:</span>
            <br /> +7 (700) 202-93-89
          </div>
          <div className="text-white">
            <span className="font-bold">Почта:</span>
            <br />
            info@ustudy.kz
          </div>
          <div className="text-white">
            <span className="font-bold">Адрес:</span>
            <br />
            Тауелсиздик 52
          </div>
        </div>
      </Container>
    </div>
  );
};
const Container = tw.div`
container mx-auto
`;
const FooterNav = tw.div`text-lg font-medium text-white cursor-pointer`;
export default Footer;
