import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './Wishlist.css';
import { useHistory } from 'react-router-dom';


function Wishlist() {

    const posts = useSelector((state) => state.posts);
    const history = useHistory();



    return (
        <div className="wishlist-container">
            <div className="wishlist-navbar">
                <h3 className="wishlist-home" onClick={() => history.push("/")}>Home</h3>
                <h3 className="wishlist-wishlist">Wishlist &nbsp; <BookmarkIcon /></h3>
            </div>

            <div className="wishlist-cards-container">
                {posts.map((post) => (post.wishlisted ?
                    <ProductCard key={post._id} post={post} /> : ''
                ))}
            </div>
        </div>
    )
}

export default Wishlist
