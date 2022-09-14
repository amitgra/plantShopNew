
import React from 'react'
import { Category } from '../../../../interface/Category'
import {ROUTES, URLS } from '../../../../enum/urls'
import useFetch from '../../../../hooks/useFetch'
import Spinner from '../../../../Components/Spinner/Spinner'
import Styled from './CategoryPreview.style'
import { Link } from 'react-router-dom'
import { METHODS } from '../../../../enum/methods'


const CategoryPreviews = () => {
  const {data:categories,isLoading} = useFetch({
    method: METHODS.GET,
    url:`${URLS.BACKEND_URL}/${URLS.CATEGORIES}`,
  })

  
console.log(categories)
  const renderCategories = ()=> (
    categories.slice(-3).map((Category:Category) => {
          const {id,name,description,imageSrc,imageAlt,href} =Category
        
  return (
          <Link to={`${ROUTES.CATEGORY}/${id}`} key={id}>
            <Styled.CategoryCard key={name} >
              <Styled.ImgContainer>               
                <Styled.Image  src={imageSrc}  alt={imageAlt}/>
              </Styled.ImgContainer>        
              <Styled.TitleWarpper> 
                  <Styled.TitleText/> {name} 
              </Styled.TitleWarpper>
              {/* <Styled.SecendTitleText> {description}</Styled.SecendTitleText> */}
              </Styled.CategoryCard>
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

              <Styled.Container>
              <Styled.WarpperContainer>
              <Styled.WarpperContainer2>
                <Styled.HeaderText>Collections</Styled.HeaderText>
                <Styled.CategoriesWarpper>
                {renderCategories()}
              </Styled.CategoriesWarpper>
              </Styled.WarpperContainer2>
            </Styled.WarpperContainer>
          </Styled.Container>
      </>       
                  }
               </>
              );
            }




export default CategoryPreviews