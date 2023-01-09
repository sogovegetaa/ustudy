import React from 'react';
import tw from 'twin.macro';
type IProps = {
  children: React.ReactNode;
};
function Button({ children }: IProps) {
  return <ButtonRes>{children}</ButtonRes>;
}
const ButtonRes = tw.div`
bg-[#30AAE2] py-[16px] cursor-pointer px-[27px] rounded-xl text-white hover:bg-black duration-200 shadow-2xl mr-8`;
export default Button;
