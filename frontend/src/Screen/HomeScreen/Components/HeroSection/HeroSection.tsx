/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Styled from './HeroSection.style'

// const navigation = [
//     { name: 'Product', href: '#' },
//     { name: 'Features', href: '#' },
//     { name: 'Marketplace', href: '#' },
//     { name: 'Company', href: '#' },
//   ]

const HeroSection = () => {
  return (

    <Styled.HeroContainer>
      <Styled.mainImage src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" /> 
        <Styled.containerWarpper> 
          <Styled.mainWarpper> 
            <Styled.main>
              <Styled.textWarpper>
                <Styled.heading>
                  <Styled.headingText> Make Your Own Jungle! </Styled.headingText>{' '}
                {/* <span className="block text-indigo-600 xl:inline">online business</span> */}
                </Styled.heading>
                <Styled.subheading> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
                </Styled.subheading>
                <Styled.btnsWarpper>
                  <Styled.leftBtnWarrper>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-900 hover:bg-green-600 md:py-4 md:text-lg md:px-10"
                  >
                    In Door Plants
                  </a>
                  </Styled.leftBtnWarrper>
                  <Styled.rightBtnWarrper>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-900 md:py-4 md:text-lg md:px-10"
                  >
                    Out Door Plants
                  </a>
                  </Styled.rightBtnWarrper>
                </Styled.btnsWarpper>
              </Styled.textWarpper>
            </Styled.main>  
          </Styled.mainWarpper>
        </Styled.containerWarpper>  
    </Styled.HeroContainer>
  )
}

export default HeroSection