"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategory = exports.getCategorytById = exports.getCategories = exports.createCategory = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const categoryService_1 = __importDefault(require("../services/categoryService"));
// @desc    Create a category
// @route   POST /api/category
// @access  Private/Admin
const createCategory = (0, express_async_handler_1.default)(async (req, res) => {
    const category = req.body;
    try {
        const createCategory = await categoryService_1.default.createCategory(category);
        res.status(201).json(createCategory);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.createCategory = createCategory;
// @desc    Fetch all categories
// @route   GET /api/categories
// @access  Public
const getCategories = (0, express_async_handler_1.default)(async (req, res) => {
    let { _end, _order, _sort, _start, q } = req.query;
    try {
        const { count, categories } = await categoryService_1.default.getCategories(_end, _start, q);
        res.set('X-Total-Count', count);
        res.json(categories);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.getCategories = getCategories;
// @desc    Fetch single category
// @route   GET /api/categories/:id
// @access  Public
const getCategorytById = (0, express_async_handler_1.default)(async (req, res) => {
    const paramId = req.params.id;
    try {
        const product = await categoryService_1.default.getCategoryById(paramId);
        res.json(product);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.getCategorytById = getCategorytById;
// @desc    Update single category
// @route   PUT /api/categories/:id
// @access  Public
const updateCategory = (0, express_async_handler_1.default)(async (req, res) => {
    const category = req.body;
    const paramId = req.params.id;
    try {
        const categoryItem = await categoryService_1.default.updateCategory(category, paramId);
        res.json(categoryItem);
    }
    catch (err) {
        res.status(400);
        throw new Error(err.message);
    }
});
exports.updateCategory = updateCategory;
