"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: Number
    },
    imageSrc: {
        type: String,
        default: 'https://thumbs.dreamstime.com/b/new-product-stamp-round-grunge-sign-label-181923461.jpg',
    },
    imageAlt: {
        type: String
    },
    href: {
        type: String,
        default: "#"
    },
    description: {
        type: String,
        required: true,
    },
    subCategory: [
        {
            name: {
                type: String,
            },
            href: {
                type: String,
                default: "#"
            },
            imageSrc: {
                type: String,
                default: '',
            },
            imageAlt: {
                type: String
            },
            description: {
                type: String,
                required: true,
            },
            items: {
                type: (Array)
            }
        },
    ],
}, { timestamps: true });
categorySchema.pre('save', async function (next) {
    if (this._id !== this.id) {
        this.id = this._id;
    }
    next();
});
const Category = mongoose_1.default.model('Category', categorySchema);
exports.default = Category;
