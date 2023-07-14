import PostMessage from "../models/postMessage.js"; // Gives us access to the PostMessage model

/*
refer to:   https://www.restapitutorial.com/httpstatuscodes.html
            for a list of http status codes 
*/

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        //console.log(postMessages);
        // return status: 200 -> successful http request and an array of postMessages
        res.status(200).json(postMessages);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        // 201 -> successful creation
        res.status(201).json(newPost);
    } catch (error) {
        // 409 -> conflict
        res.status(409).json({ message: error.message });
    }
}