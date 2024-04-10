import Joi from 'joi';

export const newbooksSchema = Joi.object({
    title: Joi.string().required().empty().messages({
        "any.required": "Tên không để trống",
        "string.empty": "Tên không đúng định dạng"
    }),
    description: Joi.string().required().empty().messages({
        "any.required": "Tên không để trống",
        "string.empty": "Tên không đúng định dạng"
    }),
    image: Joi.string().required().empty().messages({
        "any.required": "Ảnh không để trống",
        "string.empty": "Ảnh không đúng định dạng"
    }),
    author: Joi.string().required().empty().messages({
        "any.required": "Tên không để trống",
        "string.empty": "Tên không đúng định dạng"
    }),
    category: Joi.number().required().min(1000).messages({
        "any.required": "Giá không để trống",
        "number.min": "Giá sản phẩm không nhỏ hơn 1000"
    })
});

export const CheckProductValidate = (req, res, next) => {
    const { title, description, image, author, category } = req.body;
    const { error } = newbooksSchema.validate({ title, description, image, author, category });
    if (error) {
        return res.status(400).send({ status: false, message: error.message });
    } else {
        next();
    }
};
