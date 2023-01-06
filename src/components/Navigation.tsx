import Link from "next/link";
import React from "react";
import tw from "twin.macro";
const Navigation = () => {
  return (
    
      <Container>
        <NavBar>
          <NavUl>
            <NavLi><Link href="/">Главная</Link></NavLi>
            <NavLi><Link href="/about">О нас</Link></NavLi>
            <NavLi>Филиалы</NavLi>
            <NavLi>Новости</NavLi>
            <NavLi>Контакты</NavLi>
          </NavUl>
        </NavBar>
      </Container>
  
  );
};
const Container = tw.div`
container mx-auto
`;
const NavBar = tw.div`
py-[25px]
`;
const NavUl = tw.ul`
flex justify-between items-center list-none	pl-0 ml-0  font-medium
`;
const NavLi = tw.li`
text-lg
text-[#3a3b49]
cursor-pointer
`;
export default Navigation;
