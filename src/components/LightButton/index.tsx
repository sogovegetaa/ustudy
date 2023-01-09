import React from 'react'
import tw from 'twin.macro'

type Props = {
    children: React.ReactNode
}
function LightButton({children}:Props) {
  return (
    <LightButtonComp>{children}</LightButtonComp>
  )
}
const LightButtonComp = tw.button`
bg-white border border-[#30AAE2] text-[#30AAE2] py-[16px]  cursor-pointer px-[27px] rounded-xl duration-200 shadow-2xl mr-10
hover:bg-[#30AAE2] hover:text-white
`
export default LightButton