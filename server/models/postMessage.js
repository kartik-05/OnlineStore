import mongoose from 'mongoose';



const postSchema = mongoose.Schema({
    productName: String,
    productPrice: String,
    productDesp: String,
    productImg: String,
    wishlisted: {
        type: Boolean,
        default: false
    },
});


const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;