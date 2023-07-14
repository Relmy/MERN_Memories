import mongoose from "mongoose";

// Create a schema for the data we are going to store in MongoDB
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
});

// Turn the schema into a model
const PostMessage = mongoose.model("PostMessage", postSchema);

// exporting a mongoose model from the postMessage.js file
export default PostMessage;