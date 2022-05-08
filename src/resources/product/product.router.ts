import { Router } from 'express';
import {
    createProduct,
    deleteProduct,
    getAllProduct,
    getProductByID,
    getStorProducts,
    setStoreId,
    updateProduct,
} from './product.controller.js';

const router = Router({ mergeParams: true });

router.route('/').get(getAllProduct).post(createProduct);

router
    .route('/store/:storeId')
    .post(setStoreId, createProduct)
    .get(setStoreId, getStorProducts);

router
    .route('/:id')
    .get(getProductByID)
    .patch(updateProduct)
    .delete(deleteProduct);
export default router;
