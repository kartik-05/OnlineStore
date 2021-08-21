import React from 'react'
import './ProductCard.css'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { wishlistPost } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ProductCard({ post, setCurrentId, setSellModal }) {


    const dispatch = useDispatch();

    const history = useHistory();

    const addToWishlist = () => {
        if (post._id) {
            dispatch(wishlistPost(post._id));
        }
    }

    return (
        <div className="product-card-super-container">
            <div className="product-card-container">
                <div className="product-card-image">
                    <img src={post.productImg} alt="" />
                </div>
                <div className="product-card-details">
                    <div className="product-card-name">
                        {post.productName}
                    </div>
                    <div className="product-card-price">
                        Rs {post.productPrice}
                    </div>
                </div>

                <div className="product-card-desp">
                    <b>Details:</b> {post.productDesp}
                </div>
                <MoreVertIcon className="product-card-edit" onClick={() => { setCurrentId(post._id); setSellModal(true); }} />

                {post.wishlisted ? <DoneAllIcon className="product-card-done-all" /> : ''}

            </div>
            <div className="product-card-buttons">
                <button className="product-card-wishlist" onClick={addToWishlist}><BookmarkIcon /> Wishlist</button>
                <button className="product-card-buy" onClick={() => history.push('/buynow')}><ShoppingCartIcon />Buy Now</button>
            </div>
        </div>
    )
}

export default ProductCard
