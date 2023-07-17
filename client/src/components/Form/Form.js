import React, { useState } from "react";
// //import { TextField, Button, Typography, Paper } from "@material-ui/core";//
import { TextField, Button, Typography, Paper } from "@mui/material"
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import { formStyle } from "./styles";
import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({ 
        creator: '', title: '', message: '', tags: '', selectedFile: '' 
    });
    // //const classes = useStyles();//
    const styles = formStyle;
    const dispatch = useDispatch();

    /* -- Event handlers -- */
    /**
     * Handle submit event, when user submits send a post request to the api.
     * 
     * onSubmit dispatches an action to create a post.
     */
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent page refresh

        dispatch(createPost(postData)); // dispatch action to create post
    }
    
    const clear = () => {
        // setCurrentId(0);
        // setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };

    return (
        <Paper style={styles.paper}>
            <form autoComplete="off" noValidate style={styles.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    // value stored in the postData object in the state
                    value={postData.creator} 
                    // update the state
                        /* callback function that has that event as a parameter 
                        setPostData -> setter method for that state
                        ...postData -> spread operator to keep the current state
                        creator: event.target.value -> update the creator property of the postData object */
                    onChange={(event) => setPostData({ ...postData, creator: event.target.value })}
                />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(event) => setPostData({ ...postData, title: event.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(event) => setPostData({ ...postData, message: event.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(event) => setPostData({ ...postData, tags: event.target.value })} />
                <div sx={styles.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button sx={styles.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;