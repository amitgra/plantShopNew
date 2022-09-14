import styled from 'styled-components';
import tw from 'tailwind-styled-components';


const Container = tw.footer`
text-center 
lg:text-left 
bg-green-900 
text-white

`

const socialPart = tw.div`
flex 
justify-center 
items-center 
lg:justify-between 
p-6 border-b 
border-white

`

const socialTextWarpper = tw.div`
mr-12 
hidden 
lg:block
`
const socialText = tw.span`
`

const iconsWarpper = tw.div`
flex
justify-center
`
 


const Styled = {
    Container,
    socialPart,
    socialTextWarpper,
    socialText,
    iconsWarpper
  };
  
export default Styled;