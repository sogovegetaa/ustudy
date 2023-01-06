import React from "react";
import Logo from "../svgs/logo";
import tw from "twin.macro";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
    <MainHeader>
      <Container>
        <InnerHeader>
          <Logo />
          <InfoHeader>
            <div>
              <select className="bg-[#f6f6f6]">
                <option value="">RU</option>
                <option value="">KZ</option>
              </select>
            </div>
            <div>
              <Link href="#">+7 (700) 202-93-01</Link>
            </div>
            <div className="grid grid-cols-4 gap-5">
              <InstagramIcon
                sx={{ color: "#30AAE2" }}
                className=" cursor-pointer hover:scale-125"
              />
              <FacebookIcon
                sx={{ color: "#30AAE2" }}
                className=" cursor-pointer hover:scale-125"
              />
              <YouTubeIcon
                sx={{ color: "#30AAE2" }}
                className=" cursor-pointer hover:scale-125"
              />
              <TelegramIcon
                sx={{ color: "#30AAE2" }}
                className=" cursor-pointer hover:scale-125"
              />
            </div>
          </InfoHeader>
        </InnerHeader>
      </Container>
    </MainHeader>
    <Navigation />
    </>
  );
};
const MainHeader = tw.div`
bg-[#f6f6f6]
py-[15px]
font-gotham
text-lg
text-[#383736]
`;
const InnerHeader = tw.div`
flex
justify-between 
px-[15px]
items-center

`;
const InfoHeader = tw.div`
grid
grid-cols-3 
gap-5 

`;
const Container = tw.div`
container
mx-auto
`;
export default Header;
