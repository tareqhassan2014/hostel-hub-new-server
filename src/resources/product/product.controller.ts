import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../../utility/catchAsync.js';
import { deleteOne, getAll, getOne, updateOne } from '../../utility/factory.js';
import { createOne } from './../../utility/factory.js';
import ProductModel from './product.model.js';

export const getAllProduct = getAll(ProductModel);
export const createProduct = createOne(ProductModel);
export const updateProduct = updateOne(ProductModel);
export const getProductByID = getOne(ProductModel);
export const deleteProduct = deleteOne(ProductModel);

export const setStoreId = (req: Request, res: Response, next: NextFunction) => {
    // Allow nested routes
    if (!req.body.store) req.body.store = req.params.storeId;

    next();
};

export const getStorProducts = (
    req: Request,
    res: Response,
    next: NextFunction
) =>
    catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const products = await ProductModel.find({ store: req.body.store });

        console.log(req.body);

        res.status(200).json({
            status: 'success',
            data: {
                data: products,
            },
        });
    });
