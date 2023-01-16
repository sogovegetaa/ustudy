import Link from "next/link";
import React from "react";
import tw from "twin.macro";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="sticky top-0 z-50 bg-[#F8FBFE]">
      <Container>
        <div className="relative pt-4 pb-8 text-3xl md:hidden">
          {open ? (
            <p> </p>
          ) : (
            <MenuIcon
              sx={{
                position: "absolute",
                right: "2rem",
                cursor: "pointer",
                zIndex: "11",
              }}
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        <NavBar className={`${open ? "" : "hidden md:block md:relative"}`}>
          <NavUl>
            <div className="block md:hidden">
              <CloseIcon
                sx={{
                  position: "absolute",
                  right: "2rem",
                  cursor: "pointer",
                  zIndex: "11",
                  top: "7rem",
                }}
                onClick={() => setOpen(!open)}
              />
            </div>
            <NavLi>
              <Link href="/">Главная</Link>
            </NavLi>
            <NavLi>
              <Link href="/about">О нас</Link>
            </NavLi>
            <NavLi>Филиалы</NavLi>
            <NavLi>Новости</NavLi>
            <NavLi>Контакты</NavLi>
          </NavUl>
        </NavBar>
      </Container>
    </div>
  );
};

const Container = tw.div`
container mx-auto 
`;
const NavBar = tw.div`
py-[25px] 
`;
const NavUl = tw.ul`
flex md:justify-between items-center list-none	pl-0 ml-0  font-medium md:flex-row flex-col md:relative absolute md:top-0 bg-[#F8FBFE] 
md:h-auto h-[90vh] w-full top-[-143px] justify-between md:pb-0 pb-10
`;
const NavLi = tw.li`
text-lg text-[#3a3b49] cursor-pointer
`;
export default Navigation;
