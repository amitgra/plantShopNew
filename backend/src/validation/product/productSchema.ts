import Joi from 'joi';


export const productSchema = Joi.object({
    name: Joi
        .string()
        .min(2)
        .required(),
    img: Joi
        .string()
        .min(2)
        .required(),
    description: Joi
        .string()
        .min(2)
        .required(),
    price: Joi
        .number()
        .required(),
    category: Joi
       .string()
        .min(2)
        .required(),
});