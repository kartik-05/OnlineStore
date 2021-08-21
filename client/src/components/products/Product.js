import React from 'react'
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import ProductCard from '../ProductCard/ProductCard'
import './Product.css'



function Product({ setCurrentId, setSellModal }) {

    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (

        posts.length === 0 ? <CircularProgress /> : (
            <div className="product-container">
                {posts.map((post) => (
                    <ProductCard key={post._id} post={post} setCurrentId={setCurrentId} setSellModal={setSellModal} />
                ))}
            </div>
        )
    )
}

export default Product
