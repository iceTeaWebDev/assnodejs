import Joi from "joi";

export const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    date: Joi.date(),
    status: Joi.boolean(),
    quality: Joi.number()
})