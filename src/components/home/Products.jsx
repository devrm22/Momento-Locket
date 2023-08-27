import React from 'react';
import Product from '../cards/Product';

const Products = () =>{
    return(
        <div className="w-10/12 mx-auto py-5">
            <h1 className="text-gradient text-center trajan-font uppercase text-4xl my-3 py-5">Choose your Heavenly Pearl Gates below.</h1>
            <h5 className="text-center">Buy now and get one for yourself and one for your loved one, so you can share and synchronize your photo album together</h5>
            <div className="grid grid-cols-3 gap-12">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
}
export default Products;