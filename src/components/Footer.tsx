import React from 'react'
import tw from "twin.macro";
import Footerlogo from '../svgs/Footerlogo';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="bg-black py-[38px]">
        <Container>
            <div className="flex justify-between items-center">
                <div><Footerlogo/></div>
                <div className="text-white text-lg font-medium cursor-pointer">Главная</div>
                <div className="text-white text-lg font-medium cursor-pointer">О нас</div>
                <div className="text-white text-lg font-medium cursor-pointer">Филиалы</div>
                <div className="text-white text-lg font-medium cursor-pointer">Партнеры</div>
                <div className="text-white text-lg font-medium cursor-pointer">Новости</div>
                <div className="text-white text-lg font-medium cursor-pointer">Контакты</div>
            </div>
            <div className="flex justify-between items-center pt-5">
                <div className="text-white text-center"><InstagramIcon sx={{marginRight: '10px'}} /> <FacebookIcon sx={{marginRight: '10px'}} /> <YouTubeIcon /></div>
                <div className="text-white"><span className="font-bold">Номер телефона:</span><br/> +7 (700) 202-93-89</div>
                <div className="text-white"><span className="font-bold">Почта:</span><br/>info@ustudy.kz</div>
                <div className="text-white"><span className="font-bold">Адрес:</span><br/>Тауелсиздик 52</div>
            </div>
        </Container>
    </div>
  )
}
const Container = tw.div`
container mx-auto
`
export default Footer