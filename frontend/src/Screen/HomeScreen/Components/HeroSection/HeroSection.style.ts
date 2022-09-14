import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const HeroContainer = tw.div`
relative 
bg-white 
overflow-hidden
`
const mainImage = tw.img`
h-56 
w-full 
object-cover 
sm:h-72 
md:h-96 
lg:w-full 
lg:h-full 
sm:absolute
`
const containerWarpper = tw.div`
max-w-7xl 
mx-auto
`
const mainWarpper = tw.div`
relative 
z-10 
pb-8 
bg-transparent 
sm:pb-16 
md:pb-20 
lg:max-w-2xl 
lg:w-full 
lg:pb-28
 xl:pb-32
`
const main = tw.div`
mt-10 
mx-auto 
max-w-7xl 
px-4 
sm:mt-12 
sm:px-6 
md:mt-16 
lg:mt-20 
lg:px-8 
xl:mt-28
`
const textWarpper = tw.div`
sm:text-center 
lg:text-left
`

const heading = tw.h1`
text-4xl 
tracking-tight
font-extrabold 
sm:text-white 
text-black 
sm:text-5xl 
md:text-6xl
`
const headingText = tw.span`
block 
xl:inline
`

const subheading = tw.p`
mt-3 
text-base 
sm:text-white 
text-black 
sm:mt-5 
sm:text-lg 
sm:max-w-xl 
sm:mx-auto 
md:mt-5 
md:text-xl 
lg:mx-0
`

const btnsWarpper = tw.div`
mt-8 
sm:mt-32 
sm:flex 
sm:justify-center 
lg:justify-start

`

const leftBtnWarrper = tw.div`
rounded-md 
shadow
`

const rightBtnWarrper = tw.div`
mt-3 
sm:mt-0 
sm:ml-3
`

const Styled = {
    HeroContainer,
    mainImage,
    containerWarpper,
    mainWarpper,
    main,
    textWarpper,
    heading,
    headingText,
    subheading,
    btnsWarpper,
    leftBtnWarrper,
    rightBtnWarrper



  };
  
  export default Styled;