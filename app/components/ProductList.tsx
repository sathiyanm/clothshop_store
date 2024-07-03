import { getCollections, getProductList } from '@/lib/actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductCard from './ProductCard'

const ProductList = async () => {
    const products = await getProductList()
    console.log(products)
    return (
        <div className="flex flex-col items-center gap-10 py-8 px-5">
            <p className="text-heading1-bold">Collections</p>
            {!products || products.length === 0 ? (
                <p className="text-body-bold">No collections found</p>
            ) : (
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {products.map((product: ProductType) => (
                        <div className="flex flex-wrap justify-center gap-16">
                            {products.map((product: ProductType) => (
                                <ProductCard key={product._id} product={product}/>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;