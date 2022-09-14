
import styled from 'styled-components';
import tw from 'tailwind-styled-components';


const ProductsContainer = tw.div`
    bg-white
`
const ContainerWarpper = tw.div`
    max-w-2xl 
    mx-auto 
    py-16 
    px-4 
    sm:py-24 
    sm:px-6 
    lg:max-w-7xl 
    lg:px-8
`
const TextHeader = tw.div`
    text-2xl 
    font-extrabold 
    tracking-tight 
    text-gray-900
`
const ProductsWarpper = tw.div`
    mt-6 
    grid 
    grid-cols-1 
    gap-y-10 
    gap-x-6 
    sm:grid-cols-2 
    lg:grid-cols-4 
    xl:gap-x-8
`

const ProductCard = tw.div`
    group 
    relative
`

const ImgWarapper = tw.div`
    w-full 
    min-h-80 
    bg-gray-200 
    aspect-w-1 
    aspect-h-1 
    rounded-md 
    overflow-hidden 
    group-hover:opacity-75 
    lg:h-80 
    lg:aspect-none
`

const ProductImg = tw.img`
    w-full 
    h-full 
    object-center 
    object-cover 
    lg:w-fusll 
    lg:h-full
`
const InfoContainer = tw.div`
    mt-4 
    flex 
    justify-between

`
const InfoWarpper = tw.div`

`
const TitleWarpper = tw.div`
    text-sm 
    text-gray-700
`
const TitleText =tw.span`
    absolute 
    inset-0
`
const FamilyPlantText = tw.p`
    mt-1 
    text-sm 
    text-gray-500
`
const PriceText = tw.p`
    text-sm 
    font-medium 
    text-gray-900
    `
const Icon = tw.div`

`    

const Styled = {
    ProductsContainer,
    ContainerWarpper,
    TextHeader,
    ProductsWarpper,
    ProductCard,
    ImgWarapper,
    ProductImg,
    InfoContainer,
    InfoWarpper,
    TitleWarpper,
    TitleText,
    FamilyPlantText,
    PriceText,
    Icon

  };
  
  export default Styled;