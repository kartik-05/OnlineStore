import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Product from './components/products/Product';
import { getPosts } from './actions/posts'
import SellModal from './components/sellModal/SellModal';
import Wishlist from './components/wishlist/Wishlist';
import BuyNow from './components/buyNow/BuyNow';

function App() {

  const [currentId, setCurrentId] = useState(null);
  const [sellModal, setSellModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getPosts());

  }, [dispatch, currentId])


  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route exact path="/">

            <Navbar setSellModal={setSellModal} />
            <SellModal sellModal={sellModal} setSellModal={setSellModal} currentId={currentId} setCurrentId={setCurrentId} />
            <Product setCurrentId={setCurrentId} setSellModal={setSellModal} />
          </Route>

          <Route exact path="/wishlist">
            <Wishlist />
          </Route>

          <Route exact path="/buynow">
            <BuyNow />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
