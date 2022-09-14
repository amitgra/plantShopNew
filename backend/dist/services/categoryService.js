"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryModel_1 = __importDefault(require("../models/categoryModel"));
const createCategory = async (categoryItem) => {
    const { name, id, imageSrc, imageAlt, description, href, subCategory } = categoryItem;
    const category = new categoryModel_1.default({
        name,
        id,
        imageSrc,
        imageAlt,
        description,
        href,
        subCategory
    });
    const createdCategory = await category.save();
    return createdCategory;
};
const getCategories = async (_end, _start, q) => {
    if (!_end)
        _end = await categoryModel_1.default.count({});
    if (!_start)
        _start = 0;
    const keyword = q ? {
        name: {
            $regex: q,
            $options: 'i',
        },
    }
        : {};
    const recordes = _end - _start;
    if (recordes <= 0) {
        throw new Error('somthing went wrong with end & start');
    }
    const skiping = _start / recordes;
    const categories = await categoryModel_1.default.find({ ...keyword })
        .limit(recordes)
        .skip(skiping * recordes);
    const count = await categoryModel_1.default.count({});
    return { count, categories };
};
const getCategoryById = async (paramId) => {
    const category = await categoryModel_1.default.findById(paramId);
    if (category) {
        return category;
    }
    else {
        throw new Error('Category not found');
    }
};
const updateCategory = async (categoryItem, paramId) => {
    const { name, id, imageSrc, imageAlt, href, description, subCategory } = categoryItem;
    const category = await categoryModel_1.default.findById(paramId);
    if (category) {
        category.name = name,
            category.id = id;
        category.imageSrc = imageSrc,
            category.imageAlt = imageAlt,
            category.href = href,
            category.description = description,
            category.subCategory = subCategory;
        const updatedCategory = await category.save();
        return updatedCategory;
    }
    else {
        throw new Error('Category not found');
    }
};
exports.default = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory
};
