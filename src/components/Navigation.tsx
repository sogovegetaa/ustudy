import Link from "next/link";
import React from "react";
import tw from "twin.macro";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Navigation = () => {
  const [open, setOpen] = React.useState(false);
  const [navbar, setNavbar] = React.useState(false);
  navbar?document.body.style.overflow="hidden":document.body.style.overflow="auto"
  return (
    <div className="sticky top-0 z-50 bg-[#F8FBFE]">
      <Container>
        <nav className="w-full bg-[#F8FBFE]">
          <div className="md:items-center md:flex">
            <div>
              <div className="md:block">
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div
                className={`md:block ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-between space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-lg text-[#3a3b49] cursor-pointer font-medium py-7">
                    <Link href="/">Главная</Link>
                  </li>
                  <li className="text-lg text-[#3a3b49] cursor-pointer font-medium py-7">
                    <Link href="/about">О нас</Link>
                  </li>
                  <li className="text-lg text-[#3a3b49] cursor-pointer font-medium py-7">
                    <Link href="#">Филиалы</Link>
                  </li>
                  <li className="text-lg text-[#3a3b49] cursor-pointer font-medium py-7">
                    <Link href="#">Партнеры</Link>
                  </li>
                  <li className="text-lg text-[#3a3b49] cursor-pointer font-medium py-7">
                    <Link href="#">Новости</Link>
                  </li>
                  <li className="text-lg text-[#3a3b49] cursor-pointer font-medium py-7">
                    <Link href="#">Контакты</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
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
