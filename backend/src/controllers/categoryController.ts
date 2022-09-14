import asyncHandler from 'express-async-handler'
import categoryService from '../services/categoryService'


// @desc    Create a category
// @route   POST /api/category
// @access  Private/Admin
const createCategory = asyncHandler(async (req, res) => {
    const category = req.body
  
    try {
      const createCategory = await categoryService.createCategory(category)
      res.status(201).json(createCategory)
    }catch(err:any) {
      res.status(400)
      throw new Error(err.message)
    }
  })


// @desc    Fetch all categories
// @route   GET /api/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  let {_end, _order , _sort , _start, q}  = req.query
  try {
     const {count,categories} = await categoryService.getCategories(_end,_start,q)
     res.set('X-Total-Count', count)
     res.json(categories)
  }catch(err:any) {
    res.status(400)
    throw new Error(err.message)
  }  
})  


// @desc    Fetch single category
// @route   GET /api/categories/:id
// @access  Public
const getCategorytById = asyncHandler(async (req, res) => {
  const paramId = req.params.id
  
  try {
    const product = await categoryService. getCategoryById(paramId)
    res.json(product)
  }catch(err:any) {
    res.status(400)
    throw new Error(err.message)
  }
})

// @desc    Update single category
// @route   PUT /api/categories/:id
// @access  Public
const updateCategory = asyncHandler(async (req, res) => {
  const category = req.body
  const paramId = req.params.id
  
  try {
    const categoryItem = await categoryService.updateCategory(category,paramId)
    res.json(categoryItem)
  }catch(err:any) {
    res.status(400)
    throw new Error(err.message)
  }

  
})

  export {createCategory, getCategories, getCategorytById, updateCategory}