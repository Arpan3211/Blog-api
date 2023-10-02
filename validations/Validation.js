import { body, param, validationResult } from 'express-validator';


// Validation  for   new post
export const postValidationRules = [
    body('title').notEmpty().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required'),
    body('category_id').notEmpty().withMessage('Category ID is required'),
    body('category').notEmpty().withMessage('Category is required'),
];


// Validation for updating a post
export const putValidationRules = [
    param('id').isMongoId().withMessage('Invalid post ID'),
    body('title').notEmpty().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required'),
];


// Custom validation error handler middleware
export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
};