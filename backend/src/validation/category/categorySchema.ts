import Joi from 'joi';

export const categorySchema = Joi.object({
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
});