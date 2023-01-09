import React from 'react'
import tw from "twin.macro";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from 'next/image';
const Footer = () => {
  return (
    <div className="bg-black py-[38px] z-50 relative">
        <Container>
            <div className="flex items-center justify-between">
                <div><Image src="/images/Logo.png" width={153} height={57} alt="" /></div>
                <div className="text-lg font-medium text-white cursor-pointer">Главная</div>
                <div className="text-lg font-medium text-white cursor-pointer">О нас</div>
                <div className="text-lg font-medium text-white cursor-pointer">Филиалы</div>
                <div className="text-lg font-medium text-white cursor-pointer">Партнеры</div>
                <div className="text-lg font-medium text-white cursor-pointer">Новости</div>
                <div className="text-lg font-medium text-white cursor-pointer">Контакты</div>
            </div>
            <div className="flex items-center justify-between pt-5">
                <div className="text-center text-white"><InstagramIcon sx={{marginRight: '10px'}} /> <FacebookIcon sx={{marginRight: '10px'}} /> <YouTubeIcon /></div>
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