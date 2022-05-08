import mongoose from 'mongoose';
import IProduct from './product.interface.js';

const ProductModel = new mongoose.Schema(
    {
        category: {
            type: String,
            required: [true, 'A product must under a category'],
        },
        name: {
            type: String,
            required: [true, 'Name is Required!'],
            maxlength: [120, "Name can't longer than 120 character"],
        },
        store: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Store',
            required: [true, 'A Product must have a store'],
        },
        wholePrice: Number,
        stock: Number,
        img: String,
        url: String,
        features: [Object] || [],
        price: {
            type: Number,
            required: true,
        },
        priceDiscount: {
            type: Number,
            validate: {
                validator(this: any, val: number) {
                    return val < this.price;
                },
            },
            message: 'Discount price ({VALUE}) should be blow regular price.',
        },
        shipping: Number,
        publish: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

export default mongoose.model<IProduct>('Product', ProductModel);
