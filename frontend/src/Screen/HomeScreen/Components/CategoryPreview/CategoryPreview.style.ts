import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Container = tw.span`
    bg-gray-100
`
const WarpperContainer = tw.div`
    max-w-7xl 
    mx-auto 
    px-4 
    sm:px-6 
    lg:px-8
`
const WarpperContainer2 = tw.div`
    max-w-2xl 
    mx-auto 
    py-16 
    sm:py-24 
    lg:py-32 
    lg:max-w-none
    
`

const HeaderText = tw.h2`
    text-2xl 
    font-extrabold 
    text-gray-900
`

const CategoriesWarpper = tw.div`
    mt-6 
    space-y-12 
    lg:space-y-0 
    lg:grid 
    lg:grid-cols-3 
    lg:gap-x-6
`
const CategoryCard = tw.div`
    group
    relative 
`
const ImgContainer = tw.div`
    relative 
    w-full 
    h-64 
    bg-white 
    rounded-lg 
    overflow-hidden 
    group-hover:opacity-75 
    sm:aspect-w-2 
    sm:aspect-h-1 
    sm:h-80 
    lg:aspect-w-1 
    lg:aspect-h-1"
    mb-6
    mt-6

`

const Image = tw.img`
    w-full 
    h-full 
    object-center 
    object-cover
`
const TitleWarpper = tw.h3`
    mt-6 
    text-sm 
    text-gray-900
    absolute
`
const TitleText = tw.span` 
    inset-0
    
`

const SecendTitleText = tw.span`
    text-base 
    font-semibold 
    text-gray-900

`

const Styled = {

    Container,
    CategoryCard,
    WarpperContainer,
    WarpperContainer2,
    HeaderText,
    CategoriesWarpper,
    ImgContainer,
    Image,
    TitleWarpper,
    TitleText,
    SecendTitleText

  };
  
  export default Styled;