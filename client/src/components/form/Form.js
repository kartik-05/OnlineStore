import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createPost, updatePost, deletePost } from '../../actions/posts';

import './Form.css'


function Form({ setSellModal, currentId, setCurrentId }) {

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        productName: '', productPrice: '', productDesp: '', productImg: ''
    });

    useEffect(() => {
        if (post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        }
        else {
            dispatch(createPost(postData));
        }
        clearInputs();
    }

    const clearInputs = () => {
        setCurrentId(null);
        setPostData({
            productName: '', productPrice: '', productDesp: '', productImg: '',
        });
    }

    const DeletePost = () => {
        if (currentId) {
            dispatch(deletePost(currentId));
        }
        clearInputs();
    }

    return (
        <div>
            <div className="form-container">
                <div className="form-container-close" onClick={() => { setSellModal(false); clearInputs(); }}>X</div>
                <form action="submit" onSubmit={handleSubmit}>

                    <h2>{currentId ? "Edit Product Details" : "Sell Product"}</h2>
                    <input type="text" placeholder="Product Name" value={postData.productName} onChange={(e) => {
                        setPostData({ ...postData, productName: e.target.value })
                    }} />
                    <input type="number" placeholder="Product Price" value={postData.productPrice} onChange={(e) => {
                        setPostData({ ...postData, productPrice: e.target.value })
                    }} />
                    <textarea name="desp" id="form-desp" cols="26" rows="5" placeholder="Product Description" value={postData.productDesp} onChange={(e) => {
                        setPostData({ ...postData, productDesp: e.target.value })
                    }} />
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, productImg: base64 })} />
                    <button type="submit" className="form-submit-button">Submit</button>
                </form>
                <button onClick={clearInputs} className="form-clear-button">Reset</button>
                {
                    currentId ? <button onClick={DeletePost} className="form-delete-button">Delete</button> : ''
                }
            </div>
        </div>
    )
}

export default Form;
