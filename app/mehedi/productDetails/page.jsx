'use client'
import React from 'react';
import ProductImages from './ProductImages';
import ProductDescription from './ProductDescription';

const ProductDetailsPage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-20 py-20 bg-white'>
            <ProductImages />
            <ProductDescription />
        </div>
    );
};

export default ProductDetailsPage;