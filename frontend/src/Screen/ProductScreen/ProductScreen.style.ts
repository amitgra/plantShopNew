import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const Container = tw.div`
    bg-white
`
const ContainerWarpper = tw.div`
    mx-auto 
    py-16 
    px-4 
    sm:py-24 
    sm:px-6 
    lg:max-w-7xl 
    lg:px-8
`
const Product = tw.div`
    lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16
`

const ProductImage = tw.div`
lg:row-end-1 lg:col-span-4
`

const mainImageWarpper = tw.div`
aspect-w-4 
aspect-h-3 
rounded-lg
bg-gray-100 
overflow-hidden
`
const mainImage = tw.img`
object-center object-cover
`

const SecondaryImagesWarpper = tw.div`
mt-8 
grid 
grid-cols-2 
grid-rows-1 
gap-4 
sm:gap-6 
lg:gap-8
`

const SecondaryImage = tw.img`
bg-gray-100 
rounded-lg
`

const detailsContainer = tw.div`
max-w-2xl 
mx-auto 
mt-14 
sm:mt-16 
lg:max-w-none 
lg:mt-0 
lg:row-end-2 
lg:row-span-2 
lg:col-span-3
`

const HeadingWarpper = tw.div`
flex 
flex-col-reverse
`

const HeadingGap = tw.div`
mt-4
`

const Heading = tw.h1`
text-2xl f
ont-extrabold 
tracking-tight 
text-gray-900 
sm:text-3xl
`

const SubHeading = tw.p`
text-xl 
font-semibold 
tracking-tight 
text-gray-900 
sm:text-xl
`

const price = tw.p`
text-3xl 
text-gray-900"
`
const description = tw.p`
text-gray-500 
mt-6
`

const btnWarpper = tw.div`
mt-10 
grid 
grid-cols-1 
gap-x-6 
gap-y-4 
sm:grid-cols-2
`

const btn = tw.button`
w-full 
bg-indigo-600 
border border-transparent 
rounded-md 
py-3 px-8 
flex 
items-center 
justify-center 
text-base font-medium 
text-white 
hover:bg-indigo-700 
focus:outline-none 
focus:ring-2 
focus:ring-offset-2 
focus:ring-offset-gray-50 
focus:ring-indigo-500"
`
const Styled = {
    Container,
    ContainerWarpper,
    Product,
    ProductImage,
    mainImageWarpper,
    mainImage,
    SecondaryImagesWarpper,
    SecondaryImage,
    detailsContainer,
    HeadingWarpper,
    HeadingGap,
    Heading,
    SubHeading,
    price,
    description,
    btnWarpper,
    btn

  };
  
  export default Styled;