import React from 'react'
import useFetch from '../../../../hooks/useFetch'
import { Product } from '../../../../interface/Product'
import Styled from './SelectedProducts.style'
import Spinner from '../../../../Components/Spinner/Spinner'
import { Link } from 'react-router-dom'
import { Icon } from '@mui/material'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { ROUTES, URLS } from '../../../../enum/urls'
import { METHODS } from '../../../../enum/methods'


const SelectedProducts = () => {

  
  const {data:products,isLoading} = useFetch({
    method: METHODS.GET,
    url:`${URLS.BACKEND_URL}/${URLS.PRODUCTS}`
  })
  
  const renderProducts = ()=> (
          products.slice(0, 4).map((product:Product) => {
          const {_id:productId,name,img,price,plantFamily,imageAlt} =product
  
          return (
            <Link to={`${ROUTES.PRODUCT}/${productId}`} key={productId}>
                  <Styled.ProductCard key={productId}>   
                    <Styled.ImgWarapper>
                      <Styled.ProductImg src={img} alt={imageAlt}/>
                    </Styled.ImgWarapper>
                    <Styled.InfoContainer>
                      <Styled.InfoWarpper>
                        <Styled.TitleWarpper>
                          <Styled.TitleText aria-hidden="true">{name} </Styled.TitleText>
                        </Styled.TitleWarpper>
                        <Styled.FamilyPlantText>{plantFamily}</Styled.FamilyPlantText>
                        <Icon>
                          <ShoppingCartOutlined/>
                        </Icon>
                        <Icon>
                          <SearchOutlined/>
                        </Icon>
                        <Icon>
                          <FavoriteBorderOutlined/>
                        </Icon>
                      </Styled.InfoWarpper>
                      <Styled.PriceText>{price} </Styled.PriceText>
                      </Styled.InfoContainer>
                  </Styled.ProductCard>
                </Link>
                )
              }
            )
          )
                return (
                  <>
                  {isLoading ? 
                    <Spinner />
                  :
                  <>
                    <Styled.ProductsContainer>
                    <Styled.ContainerWarpper>
                    <Styled.TextHeader> Selected Products</Styled.TextHeader>  
                    <Styled.ProductsWarpper>
                     {renderProducts()}
                    </Styled.ProductsWarpper>
                    </Styled.ContainerWarpper>
                    </Styled.ProductsContainer>
                   </>       
                  }
               </>
              );
            }
            
export default SelectedProducts