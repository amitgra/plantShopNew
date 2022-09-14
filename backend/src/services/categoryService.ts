import Category from '../models/categoryModel'
import mongoose from 'mongoose'


const createCategory = async (categoryItem:any) => {
    const {
        name,
        id,
        imageSrc,
        imageAlt,
        description,
        href,
        subCategory

    } = categoryItem
  
    const category = new Category({
 
        name,
        id,
        imageSrc,
        imageAlt,
        description,
        href,
        subCategory
    })
  
    const createdCategory = await category.save()
    return createdCategory
}

const getCategories = async (_end:any,_start:any,q:any) => {
    
  
    if(!_end) _end =  await Category.count({})
    if(!_start) _start = 0
  
    
    const keyword = q ? {
          name: {
            $regex: q,
            $options: 'i',
          },
        }
    : {}
  
    const recordes = _end - _start
    if(recordes <= 0) {
      throw new Error('somthing went wrong with end & start')
    } 
    const skiping = _start / recordes
    const categories = await Category.find({...keyword})
                            .limit(recordes)
                            .skip(skiping * recordes)
  
    const count = await Category.count({})

    return {count,categories}
}


const getCategoryById = async (paramId:any) => {
    const category = await Category.findById(paramId)
  
    if (category) {
      return category
    } else {
      throw new Error('Category not found')
    }
}

const updateCategory = async (categoryItem:any,paramId:any) => {
    const {
          name,
          id,
          imageSrc,
          imageAlt,
          href,
          description,
          subCategory
    } = categoryItem
  
  
    const category = await Category.findById(paramId)
  
    if (category) {
      category.name = name,
      category.id= id
      category.imageSrc=imageSrc,
      category.imageAlt= imageAlt,
      category.href = href,
      category.description = description,
      category.subCategory = subCategory
  
      const updatedCategory = await category.save()
      return updatedCategory
    } else {
      throw new Error('Category not found')
    }
}

export default {
    createCategory, 
    getCategories,
    getCategoryById,
    updateCategory
}