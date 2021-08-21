import React from 'react'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StoreIcon from '@material-ui/icons/Store';
import { useHistory } from 'react-router-dom';

import './Navbar.css';

function Navbar({ setSellModal }) {

    const history = useHistory();

    const goToWishlist = () => {
        history.push('./wishlist');
    }

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                StOrE
            </div>
            <div className="navbar-sell" onClick={() => setSellModal(true)}><StoreIcon /> &nbsp; Sell a Product</div>
            <div className="navbar-menu" onClick={goToWishlist}>
                Wishlist &nbsp; <BookmarkIcon />
            </div>
        </div>
    )
}

export default Navbar
