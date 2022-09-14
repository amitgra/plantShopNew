import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Icon } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { METHODS } from '../../enum/methods'
import { ROUTES, URLS } from '../../enum/urls'
import useFetch from '../../hooks/useFetch'
import { Product } from '../../interface/Product'
import Spinner from '../Spinner/Spinner'
import Styled from './productsList.style'


const ProductsList = () => {

    const {data:products,isLoading} = useFetch({
        method: METHODS.GET,
        url:`${URLS.BACKEND_URL}/${URLS.PRODUCTS}`
      })
      
      const renderProducts = ()=> (
              products.slice(0, 4).map((product:Product) => {
              const {id,name,img,price,plantFamily,imageAlt} =product
      
              return (
                <Link to={`${ROUTES.PRODUCT}/${id}`} key={id}>
                      <Styled.ProductCard key={id}>   
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

export default ProductsList